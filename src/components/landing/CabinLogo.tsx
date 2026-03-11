"use client";

import React from 'react';

export function CabinLogo({ className = "" }: { className?: string }) {
    return (
        <div className={`relative ${className}`} style={{ width: '40px', height: '33px' }}>
            <style jsx>{`
                .traditional-cabin {
                    position: relative;
                    width: 120px;
                    height: 100px;
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    transform-origin: top left;
                    transform: scale(0.33); /* Scales 120px -> ~40px */
                    margin-top: -8px; /* Lift the logo up to align with text */
                }
                .roof {
                    position: absolute;
                    top: 10px;
                    width: 0;
                    height: 0;
                    border-left: 60px solid transparent;
                    border-right: 60px solid transparent;
                    border-bottom: 45px solid white;
                }
                .chimney {
                    position: absolute;
                    top: 15px;
                    right: 25px;
                    width: 12px;
                    height: 25px;
                    background-color: white;
                    z-index: 0;
                }
                .cabin-body {
                    width: 90px;
                    height: 45px;
                    background-color: transparent;
                    border: 2px solid white;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .window {
                    width: 15px;
                    height: 15px;
                    border: 1px solid white;
                }
                .door {
                    width: 18px;
                    height: 30px;
                    border: 1px solid white;
                    border-bottom: none;
                    margin-top: 15px;
                }
            `}</style>
            <div className="traditional-cabin">
                <div className="chimney"></div>
                <div className="roof"></div>
                <div className="cabin-body">
                    <div className="window"></div>
                    <div className="door"></div>
                    <div className="window"></div>
                </div>
            </div>
        </div>
    );
}
