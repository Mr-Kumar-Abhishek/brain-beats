# COCOMO Production Cost Estimate

This document provides a rough production-cost estimate for the project using three COCOMO variants: Organic, Semi-Detached, and Embedded.

## Assumptions

- Estimated size: 257.231 KLOC
- Average cost rate: $8,000 per person-month
- Team size estimate: $PM / TDEV$

## Model Formulas

- Organic: $PM = 2.4 \times (KLOC^{1.05})$, $TDEV = 2.5 \times (PM^{0.38})$
- Semi-Detached: $PM = 3.0 \times (KLOC^{1.12})$, $TDEV = 2.5 \times (PM^{0.35})$
- Embedded: $PM = 3.6 \times (KLOC^{1.20})$, $TDEV = 2.5 \times (PM^{0.32})$

## Calculated Results

| Model | Effort (person-months) | Development Time (months) | Average Team Size | Estimated Total Cost |
| --- | ---: | ---: | ---: | ---: |
| Organic | 814.80 | 31.93 | 25.52 | $6,518,395.39 |
| Semi-Detached | 1,502.05 | 32.34 | 46.44 | $12,016,371.44 |
| Embedded | 2,809.90 | 31.73 | 88.55 | $22,479,179.49 |

## Notes

These are high-level estimates based on the current repository size and simplified COCOMO assumptions. Actual costs may vary depending on staffing, tooling, maintenance, hosting, and feature scope.
