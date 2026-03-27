// ============================================================
//  CLIENT CONFIGURATION — City of Murrieta 457 Plan
//  Swap this file for each new client. index.html is the
//  shared template and should never need to be edited.
// ============================================================

const clientConfig = {

    // ----------------------------------------------------------
    // Branding & Identity
    // ----------------------------------------------------------
    pageTitle:    'City of Murrieta - Deferred Compensation Plan',
    planName:     'City of Murrieta',
    planSubtitle: '457 Deferred Compensation Plan',

    // Theme colors
    colors: {
        primary:      '#1a3a5c',
        primaryLight: '#2a5a8c',
        accent:       '#c8a951',
        accentLight:  '#e8d080'
    },

    // ----------------------------------------------------------
    // Login / CTA
    // ----------------------------------------------------------
    loginUrl:  'https://www.nrsforu.com/iApp/rsc/login.x',
    loginText: 'Log In to Nationwide',
    ctaTitle:  'Ready to Invest?',
    ctaBody:   'Log in to your Nationwide retirement account to select your investment allocation and start putting your plan into action.',

    // ----------------------------------------------------------
    // Footer
    // ----------------------------------------------------------
    footerName:       'City of Murrieta 457 Deferred Compensation Plan',
    footerDisclaimer: 'This tool is for educational purposes only and does not constitute investment advice.<br>Consult a financial advisor before making investment decisions. Past performance does not guarantee future results.<br>Fund performance data sourced from Yahoo Finance / Morningstar. Trailing returns as of 2/28/2026. Updated Q1 2026.',

    // ----------------------------------------------------------
    // Model Portfolios
    // Set to false if the client has no model portfolios.
    // When false, the target date fund becomes the Best Match.
    // ----------------------------------------------------------
    hasModelPortfolios: true,

    // ----------------------------------------------------------
    // Risk Profile → Fund Mapping
    // Scores are cumulative (timeScore + riskScore).
    // modelFund: null if client has no model portfolios.
    // ----------------------------------------------------------
    riskProfiles: [
        { maxScore: 10,       profile: 'Conservative',           modelFund: 'modelConservative',    allocationFund: 'wellesley' },
        { maxScore: 14,       profile: 'Moderately Conservative', modelFund: 'modelConservative',   allocationFund: 'lifestrategyConservative' },
        { maxScore: 18,       profile: 'Moderate',               modelFund: 'modelBalanced',        allocationFund: 'puritan' },
        { maxScore: 22,       profile: 'Moderate Growth',        modelFund: 'modelModerateGrowth',  allocationFund: 'lifestrategyGrowth' },
        { maxScore: 26,       profile: 'Moderately Aggressive',  modelFund: 'modelAggressive',      allocationFund: 'lifestrategyGrowth' },
        { maxScore: Infinity, profile: 'Aggressive',             modelFund: 'modelAggressive',      allocationFund: 'lifestrategyGrowth' }
    ],

    // ----------------------------------------------------------
    // Fund Data
    // Add, remove, or edit funds here for each client.
    // ----------------------------------------------------------
    fundData: {

        // ── Model Portfolios ───────────────────────────────────
        modelAggressive: {
            id: 'modelAggressive',
            type: 'Model Portfolio',
            name: 'Murrieta Aggressive Growth Model',
            badge: 'Best Match',
            shortDesc: 'A diversified portfolio of plan funds targeting 85% equity and 15% fixed income, designed for participants seeking maximum long-term growth.',
            riskLevel: 'Aggressive',
            stockBond: '85% Equity / 15% Fixed Income',
            expenseRatio: '0.13%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants with 20+ years to retirement who want maximum growth potential.',
            performance: { yr1: '16.95%', yr3: '18.96%', yr5: '9.28%', yr10: '11.75%' },
            stats: { sharpe3yr: '1.14', stdDev3yr: '11.62%', inception: '9/1/2015', rebalance: 'Quarterly' },
            description: 'The Murrieta Aggressive Growth Model is constructed using individual funds available in the City of Murrieta 457 plan. It targets approximately 85% equity across U.S. large-cap, mid-cap, small-cap, international, and real estate, with about 15% in fixed income for modest diversification. The portfolio is rebalanced quarterly and has outperformed its peer group benchmark since inception.',
            allocation: [
                '35.00% Vanguard Large Cap Index Admiral (VLCAX)',
                '14.98% Vanguard Growth Index Admiral (VIGAX)',
                '10.05% Vanguard Total Intl Stock Index Admiral (VTIAX)',
                '10.00% Baird Core Plus Bond Inst (BCOIX)',
                '9.95% Vanguard International Growth Adm (VWILX)',
                '5.08% Vanguard Real Estate Index Admiral',
                '5.00% iShares Russell Mid-Cap Index K (BRMKX)',
                '4.98% BlackRock High Yield K (BRHYX)',
                '4.96% iShares Russell Small/Mid-Cap Idx K (BSMKX)'
            ],
            pros: ['Highest growth potential: 18.96% annualized 3-year return', 'Low expense ratio of 0.13%', 'Broad diversification across 9 funds and multiple asset classes', 'Quarterly rebalancing maintains target allocation'],
            cons: ['Highest volatility (11.62% standard deviation)', 'Requires understanding that short-term losses are normal', 'Model portfolio is managed by the plan; participant selects it as a single option']
        },

        modelModerateGrowth: {
            id: 'modelModerateGrowth',
            type: 'Model Portfolio',
            name: 'Murrieta Moderate Growth Model',
            badge: 'Best Match',
            shortDesc: 'A growth-oriented portfolio targeting 75% equity and 25% fixed income, designed for participants seeking strong growth with moderate risk.',
            riskLevel: 'Moderate Growth',
            stockBond: '75% Equity / 25% Fixed Income',
            expenseRatio: '0.10%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants with 15-25 years to retirement seeking growth with some downside protection.',
            performance: { yr1: '16.35%', yr3: '17.71%', yr5: '8.82%', yr10: '10.90%' },
            stats: { sharpe3yr: '1.16', stdDev3yr: '10.44%', inception: '9/1/2015', rebalance: 'Quarterly' },
            description: 'The Murrieta Moderate Growth Model targets 75% equity and 25% fixed income. It includes broad U.S. equity exposure, international diversification, real estate, and a meaningful bond allocation through intermediate-term and core-plus bond funds. The portfolio has delivered strong risk-adjusted returns with a 1.16 Sharpe ratio over 3 years.',
            allocation: [
                '40.00% Vanguard Large Cap Index Admiral (VLCAX)',
                '15.00% Vanguard Interm-Term Bond Index Adm (VBILX)',
                '10.00% Vanguard Growth Index Admiral (VIGAX)',
                '10.00% Vanguard Total Intl Stock Index Admiral (VTIAX)',
                '5.00% Baird Core Plus Bond Inst (BCOIX)',
                '5.00% BlackRock High Yield K (BRHYX)',
                '5.00% Vanguard International Growth Adm (VWILX)',
                '5.00% iShares Russell Mid-Cap Index K (BRMKX)',
                '3.00% Vanguard Real Estate Index Admiral',
                '2.00% iShares Russell Small/Mid-Cap Idx K (BSMKX)'
            ],
            pros: ['Strong growth with moderate risk: 17.71% annualized 3-year return', 'Best Sharpe ratio among models (1.16)', 'Very low expense ratio of 0.10%', 'Quarterly rebalancing maintains target allocation'],
            cons: ['Moderate volatility (10.44% standard deviation)', 'Less growth potential than the Aggressive model', 'Model portfolio is managed by the plan; participant selects it as a single option']
        },

        modelBalanced: {
            id: 'modelBalanced',
            type: 'Model Portfolio',
            name: 'Murrieta Balanced Model',
            badge: 'Best Match',
            shortDesc: 'A balanced portfolio targeting 65% equity, 25% fixed income, and 10% stable value/cash for growth with meaningful stability.',
            riskLevel: 'Moderate',
            stockBond: '65% Equity / 25% Fixed / 10% SV/Cash',
            expenseRatio: '0.08%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants with 10-20 years to retirement seeking a balance of growth and stability.',
            performance: { yr1: '14.76%', yr3: '17.14%', yr5: '9.14%', yr10: '10.51%' },
            stats: { sharpe3yr: '1.27', stdDev3yr: '9.02%', inception: '9/1/2015', rebalance: 'Quarterly' },
            description: 'The Murrieta Balanced Model blends 65% equity, 25% fixed income, and 10% stable value/cash. It offers solid growth potential with meaningful downside protection. This model boasts the highest Sharpe ratio (1.27) among all four models, indicating the best risk-adjusted returns, and the lowest expense ratio at just 0.08%.',
            allocation: [
                '45.00% Vanguard Large Cap Index Admiral (VLCAX)',
                '15.00% Vanguard Interm-Term Bond Index Adm (VBILX)',
                '10.00% Vanguard Growth Index Admiral (VIGAX)',
                '10.00% Vanguard Treasury Money Market Investor (VUSXX)',
                '5.00% BlackRock High Yield K (BRHYX)',
                '5.00% Vanguard Inflation-Protected Secs Adm (VAIPX)',
                '5.00% Vanguard Total Intl Stock Index Admiral (VTIAX)',
                '3.00% iShares Russell Mid-Cap Index K (BRMKX)',
                '2.00% iShares Russell Small/Mid-Cap Idx K (BSMKX)'
            ],
            pros: ['Best risk-adjusted returns: Sharpe ratio of 1.27', 'Lowest expense ratio of all models at 0.08%', 'Stable value/cash allocation provides downside cushion', 'Quarterly rebalancing maintains target allocation'],
            cons: ['Lower growth potential than Moderate Growth and Aggressive models', 'Cash allocation may drag on returns in strong markets', 'Model portfolio is managed by the plan; participant selects it as a single option']
        },

        modelConservative: {
            id: 'modelConservative',
            type: 'Model Portfolio',
            name: 'Murrieta Conservative Model',
            badge: 'Best Match',
            shortDesc: 'A stability-focused portfolio targeting 45% equity, 40% fixed income, and 15% stable value/cash, emphasizing capital preservation.',
            riskLevel: 'Conservative',
            stockBond: '45% Equity / 40% Fixed / 15% SV/Cash',
            expenseRatio: '0.10%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants nearing retirement or who prioritize capital preservation and income.',
            performance: { yr1: '12.47%', yr3: '13.16%', yr5: '6.74%', yr10: '8.17%' },
            stats: { sharpe3yr: '1.09', stdDev3yr: '7.15%', inception: '9/1/2015', rebalance: 'Quarterly' },
            description: 'The Murrieta Conservative Model targets 45% equity, 40% fixed income, and 15% stable value/cash. It is designed for participants approaching or in retirement who prioritize stability and income. The significant bond and stable value allocation provides a meaningful cushion against market downturns while still offering growth through its equity holdings.',
            allocation: [
                '30.00% Vanguard Large Cap Index Admiral (VLCAX)',
                '20.00% Vanguard Interm-Term Bond Index Adm (VBILX)',
                '15.00% Vanguard Treasury Money Market Investor (VUSXX)',
                '10.00% Vanguard Inflation-Protected Secs Adm (VAIPX)',
                '5.00% BlackRock High Yield K (BRHYX)',
                '5.00% Vanguard Growth Index Admiral (VIGAX)',
                '5.00% Vanguard Multi-Sector Income Bond Adm',
                '5.00% Vanguard Total Intl Stock Index Admiral (VTIAX)',
                '3.00% iShares Russell Mid-Cap Index K (BRMKX)',
                '2.00% iShares Russell Small/Mid-Cap Idx K (BSMKX)'
            ],
            pros: ['Lowest volatility of all models (7.15% standard deviation)', 'Significant stable value and bond allocation for capital preservation', '15% money market provides liquidity and safety', 'Quarterly rebalancing maintains target allocation'],
            cons: ['Lowest growth potential among the four models', 'May not keep pace with inflation in low-rate environments', 'Model portfolio is managed by the plan; participant selects it as a single option']
        },

        // ── Target Date Fund (dynamic — do not remove) ─────────
        targetDate: {
            id: 'targetDate',
            type: 'Target Date Fund',
            name: '',           // Set dynamically
            badge: '',
            shortDesc: 'A Vanguard Target Retirement Fund that automatically adjusts its stock/bond mix to become more conservative as you approach your target retirement year.',
            riskLevel: '',      // Set dynamically
            stockBond: '',      // Set dynamically
            expenseRatio: '0.08%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants who want a professionally managed, hands-off approach to retirement investing.',
            description: 'Vanguard Target Retirement Funds are all-in-one solutions available in the City of Murrieta plan. You choose the fund closest to your expected retirement year, and Vanguard automatically adjusts the asset allocation over time through a "glide path." The fund invests in a mix of Vanguard mutual funds, shifting from stocks to bonds as retirement approaches. These funds are among the most popular options in the plan.',
            allocation: [],     // Set dynamically
            pros: ['Fully automatic rebalancing and glide path', 'Simple one-fund solution requiring no maintenance', 'Very low expense ratio of 0.08%', 'Vanguard Target Retirement Funds are the largest target date series in the U.S.'],
            cons: ['Less control over individual holdings', 'One-size-fits-all approach may not suit everyone', 'Fixed glide path does not account for individual circumstances']
        },

        // ── Allocation Funds ───────────────────────────────────
        lifestrategyGrowth: {
            id: 'lifestrategyGrowth',
            type: 'Allocation Fund',
            name: 'Vanguard LifeStrategy Growth Fund (VASGX)',
            badge: '',
            shortDesc: 'Invests in a mix of Vanguard funds with approximately 80% in stocks and 20% in bonds, seeking capital appreciation and some current income.',
            riskLevel: 'Moderately Aggressive',
            stockBond: '80% Stocks / 20% Bonds',
            expenseRatio: '0.12%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants with a long time horizon who want a growth-oriented, hands-off solution with a fixed allocation.',
            performance: { yr1: '21.81%', yr3: '17.36%', yr5: '9.26%', yr10: '10.94%' },
            description: 'The Vanguard LifeStrategy Growth Fund invests in a mix of Vanguard mutual funds with approximately 80% allocated to stocks and 20% to bonds. The fund provides broad exposure to U.S. and international equity and fixed-income markets. Unlike a target date fund, this allocation remains fixed and does not become more conservative over time, making it ideal for investors who are comfortable maintaining a growth-oriented profile throughout their investment horizon.',
            allocation: [
                '~48% Vanguard Total Stock Market Index',
                '~32% Vanguard Total International Stock Index',
                '~14% Vanguard Total Bond Market II Index',
                '~6% Vanguard Total International Bond II Index'
            ],
            pros: ['Strong long-term growth potential with 80% equity allocation', 'Very low expense ratio of 0.12%', 'Broad global diversification across U.S. and international markets', 'Automatic rebalancing within the fund'],
            cons: ['Fixed allocation does not become more conservative over time', 'Higher volatility than moderate or conservative options', 'No stable value, TIPS, or real estate component']
        },

        lifestrategyConservative: {
            id: 'lifestrategyConservative',
            type: 'Allocation Fund',
            name: 'Vanguard LifeStrategy Conservative Growth Fund (VSCGX)',
            badge: '',
            shortDesc: 'Invests in a mix of Vanguard funds with approximately 40% in stocks and 60% in bonds, seeking current income and low to moderate capital appreciation.',
            riskLevel: 'Conservative',
            stockBond: '40% Stocks / 60% Bonds',
            expenseRatio: '0.12%',
            turnover: 'Low',
            minInvestment: 'None',
            bestFor: 'Participants nearing retirement or with a low risk tolerance who still want some growth exposure.',
            performance: { yr1: '13.58%', yr3: '11.19%', yr5: '4.84%', yr10: '6.45%' },
            description: 'The Vanguard LifeStrategy Conservative Growth Fund invests in a mix of Vanguard mutual funds according to an asset-allocation strategy that reflects approximately 60% fixed-income securities and 40% common stocks. The indirect fixed-income holdings include a diversified mix of short-, intermediate-, and long-term U.S. government, agency, and investment-grade corporate bonds, as well as international bonds. This conservative allocation provides stability and income while maintaining some equity exposure to help offset inflation.',
            allocation: [
                '~24% Vanguard Total Stock Market Index',
                '~16% Vanguard Total International Stock Index',
                '~42% Vanguard Total Bond Market II Index',
                '~18% Vanguard Total International Bond II Index'
            ],
            pros: ['Low volatility with meaningful bond allocation', 'Broad global diversification for a conservative fund', 'Very low expense ratio of 0.12%', 'Automatic rebalancing within the fund'],
            cons: ['Fixed allocation does not adjust with age', 'Limited upside in strong equity markets', 'May not provide enough growth for younger investors']
        },

        puritan: {
            id: 'puritan',
            type: 'Allocation Fund',
            name: 'Fidelity Puritan K6 Fund (FPKFX)',
            badge: '',
            shortDesc: 'An actively managed balanced fund investing approximately 60% in stocks and 40% in bonds, seeking income and capital growth consistent with reasonable risk.',
            riskLevel: 'Moderate',
            stockBond: '60% Stocks / 40% Bonds',
            expenseRatio: '0.34%',
            turnover: 'Moderate',
            minInvestment: 'None',
            bestFor: 'Participants seeking a single balanced fund with active management and a moderate risk profile.',
            performance: { yr1: '13.61%', yr3: '16.74%', yr5: '9.47%', yr10: 'N/A', sinceInception: '9.47%' },
            description: 'The Fidelity Puritan K6 Fund seeks income and capital growth consistent with reasonable risk. It invests approximately 60% in stocks and other equity securities and the remainder in bonds and other debt securities, including lower-quality debt securities. The fund invests at least 25% of total assets in fixed-income senior securities and may invest in both domestic and foreign issuers. Unlike the index-based Vanguard options, the Puritan fund relies on Fidelity\'s research team to actively select individual securities.',
            allocation: [
                '~60% Equities (U.S. and International)',
                '~40% Fixed Income (Investment-grade, high-yield, and other bonds)',
                'At least 25% in fixed-income senior securities',
                'Actively managed with flexibility to adjust holdings'
            ],
            pros: ['Active management can potentially add value in changing markets', 'Balanced approach seeks both income and capital growth', 'Manager flexibility to adjust to market conditions', 'K6 share class offers institutional pricing'],
            cons: ['Higher expense ratio (0.34%) than index-based alternatives', 'Active management does not guarantee outperformance', 'Less transparency in holdings compared to index funds']
        },

        wellesley: {
            id: 'wellesley',
            type: 'Allocation Fund',
            name: 'Vanguard Wellesley Income Admiral (VWIAX)',
            badge: '',
            shortDesc: 'A conservative allocation fund investing approximately 60-65% in bonds and 35-40% in dividend-paying stocks, focused on income and capital preservation.',
            riskLevel: 'Conservative',
            stockBond: '35-40% Stocks / 60-65% Bonds',
            expenseRatio: '0.16%',
            turnover: 'Low to Moderate',
            minInvestment: 'None',
            bestFor: 'Participants at or near retirement who prioritize income and capital preservation over growth.',
            performance: { yr1: '10.84%', yr3: '9.20%', yr5: '5.23%', yr10: '6.46%' },
            description: 'The Vanguard Wellesley Income Admiral Fund seeks long-term growth of income and a high and sustainable level of current income, along with moderate long-term capital appreciation. The fund invests approximately 60-65% of its assets in investment-grade fixed income securities, including corporate, U.S. Treasury, and government agency bonds, as well as mortgage-backed securities. The remaining 35-40% is invested in common stocks of companies with a history of above-average dividends or expectations of increasing dividends.',
            allocation: [
                '~60-65% Investment-grade fixed income (corporate, Treasury, agency, MBS)',
                '~35-40% Equities (high-quality, dividend-paying stocks)',
                'Managed by Wellington Management Company'
            ],
            pros: ['Strong emphasis on income and capital preservation', 'Managed by Wellington Management, one of the oldest investment firms', 'Low expense ratio of 0.16% for an actively managed fund', 'Focus on dividend-paying stocks provides income stability'],
            cons: ['Limited growth potential in strong equity markets', 'Not suitable for younger participants seeking aggressive growth', 'Currently on Watch status in the plan monitoring report']
        }

    } // end fundData

}; // end clientConfig
