# COCOMO Production Cost Estimate

This document provides a rough production-cost estimate for the project using three COCOMO variants: Organic, Semi-Detached, and Embedded.

## Assumptions

- Estimated size: 434.536 KLOC (Updated after massive markdown post generation & repository expansion)
- Average cost rate: $8,000 per person-month
- Team size estimate: $PM / TDEV$

## Model Formulas

- Organic: $PM = 2.4 \times (KLOC^{1.05})$, $TDEV = 2.5 \times (PM^{0.38})$
- Semi-Detached: $PM = 3.0 \times (KLOC^{1.12})$, $TDEV = 2.5 \times (PM^{0.35})$
- Embedded: $PM = 3.6 \times (KLOC^{1.20})$, $TDEV = 2.5 \times (PM^{0.32})$

## Calculated Results

| Model | Effort (person-months) | Development Time (months) | Average Team Size | Estimated Total Cost |
| --- | ---: | ---: | ---: | ---: |
| Organic | 1,412.99 | 39.35 | 35.90 | $11,303,899.28 |
| Semi-Detached | 2,702.15 | 39.72 | 68.03 | $21,617,211.23 |
| Embedded | 5,271.49 | 38.81 | 135.82 | $42,171,942.34 |

## Notes

These are high-level estimates based on the current repository size (including generated blog content and layout code) and simplified COCOMO assumptions. Actual costs may vary depending on staffing, tooling, maintenance, hosting, and feature scope.
