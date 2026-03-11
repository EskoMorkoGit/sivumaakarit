const chromeLauncher = require('chrome-launcher');

(async () => {
    const { default: lighthouse } = await import('lighthouse');
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
        port: chrome.port,
    };

    const url = process.argv[2] || 'http://localhost:3000';
    console.log(`Running Lighthouse on ${url}...`);

    const runnerResult = await lighthouse(url, options);

    // `.lhr` is the Lighthouse Result as a JS object
    console.log('Report is done for', runnerResult.lhr.finalUrl);

    const scores = {
        performance: runnerResult.lhr.categories.performance.score * 100,
        accessibility: runnerResult.lhr.categories.accessibility.score * 100,
        'best-practices': runnerResult.lhr.categories['best-practices'].score * 100,
        seo: runnerResult.lhr.categories.seo.score * 100,
    };

    console.table(scores);

    let failed = false;
    Object.keys(scores).forEach(category => {
        if (scores[category] < 100) {
            console.error(`❌ ${category} score is ${scores[category]}, expected 100`);
            failed = true;

            // Print out specific failed audits for this category
            console.log(`   Failed audits in ${category}:`);
            const categoryObj = runnerResult.lhr.categories[category];
            if (categoryObj && categoryObj.auditRefs) {
                categoryObj.auditRefs.forEach(ref => {
                    const audit = runnerResult.lhr.audits[ref.id];
                    // Some audits are binary (score 0 or 1), some are informative. We care about score < 1 and not null
                    if (audit && audit.score !== null && audit.score < 1 && ref.weight > 0) {
                        console.log(`   - ${audit.title} (Score: ${audit.score})`);
                        if (audit.details && audit.details.items && audit.details.items.length > 0) {
                            console.log(`     Details: ${JSON.stringify(audit.details.items).substring(0, 100)}...`);
                        }
                    }
                });
            }
        } else {
            console.log(`✅ ${category} score is 100`);
        }
    });

    await chrome.kill();

    if (failed) {
        process.exit(1);
    } else {
        console.log('🎉 All scores are 100!');
        process.exit(0);
    }
})();
