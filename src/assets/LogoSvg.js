// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
// import uuid from "react-uuid";

// function GroupExplosion() {
//     let g1 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 567.5,640.5 C 571.722,641.071 573.722,643.571 573.5,648C 573.265,662.717 571.431,677.217 568,691.5C 564,696.833 560,696.833 556,691.5C 551.048,682.594 546.381,673.594 542,664.5C 540.312,675.437 538.978,686.437 538,697.5C 536.867,699.211 535.367,699.711 533.5,699C 532.349,689.244 532.182,679.411 533,669.5C 533.189,661.691 534.189,654.024 536,646.5C 539.641,644.26 542.974,644.927 546,648.5C 549.397,656.692 552.397,665.025 555,673.5C 556.434,677.382 558.6,680.715 561.5,683.5C 562.971,682.619 563.804,681.286 564,679.5C 564.333,669.833 564.667,660.167 565,650.5C 565.146,646.942 565.979,643.609 567.5,640.5 Z"
//           />
//         </g>
//       );
    
//       let g2 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 643.5,641.5 C 648.213,641.468 649.713,643.801 648,648.5C 642.667,657.833 637.333,667.167 632,676.5C 629.528,683.389 627.528,690.389 626,697.5C 621.702,700.765 619.202,699.765 618.5,694.5C 619.994,688.21 620.828,681.876 621,675.5C 617.947,672.113 615.28,668.447 613,664.5C 612.449,659.455 612.782,654.455 614,649.5C 615.574,644.201 618.574,642.868 623,645.5C 621.949,651.768 621.282,658.101 621,664.5C 622.666,667.379 625.166,668.212 628.5,667C 634.142,658.884 639.142,650.384 643.5,641.5 Z"
//           />
//         </g>
//       );
    
//       let g3 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 864.5,642.5 C 866.958,642.227 868.625,643.227 869.5,645.5C 868.764,647.541 867.931,649.541 867,651.5C 861.028,659.305 854.528,666.638 847.5,673.5C 847.529,675.029 848.196,676.196 849.5,677C 856.624,680.98 863.124,685.814 869,691.5C 869.659,694.353 868.492,696.02 865.5,696.5C 863.39,695.946 861.39,695.112 859.5,694C 854.827,688.994 849.827,684.328 844.5,680C 842.564,679.187 840.564,678.687 838.5,678.5C 838.691,685.681 837.358,692.515 834.5,699C 832.888,699.72 831.388,699.554 830,698.5C 830.565,681.522 831.232,664.522 832,647.5C 833.786,644.638 836.119,643.972 839,645.5C 840.274,652.103 840.774,658.77 840.5,665.5C 842.783,665.392 844.783,664.559 846.5,663C 853.454,656.888 859.454,650.054 864.5,642.5 Z"
//           />
//         </g>
//       );
    
//       let g4 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 508.5,643.5 C 520.726,643.556 527.393,649.723 528.5,662C 526.155,675.026 520.155,686.026 510.5,695C 502.595,699.575 494.262,700.575 485.5,698C 476.253,689.534 474.086,679.367 479,667.5C 485.713,655.573 495.546,647.573 508.5,643.5 Z M 505.5,651.5 C 514.925,649.77 520.259,653.603 521.5,663C 519.474,673.365 514.474,682.031 506.5,689C 500.561,693.898 494.228,694.564 487.5,691C 481.631,672.564 487.631,659.397 505.5,651.5 Z"
//           />
//         </g>
//       );
    
//       let g5 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 584.5,642.5 C 588.792,642.809 590.459,645.142 589.5,649.5C 588.325,659.549 586.825,669.549 585,679.5C 584.333,683.167 584.333,686.833 585,690.5C 586.726,691.576 588.559,691.743 590.5,691C 595.001,688.584 599.334,685.917 603.5,683C 605.81,682.503 608.143,682.337 610.5,682.5C 611.041,685.652 610.041,688.152 607.5,690C 602.659,692.921 597.659,695.588 592.5,698C 582.147,701.654 576.48,697.987 575.5,687C 578.055,673.894 580.221,660.728 582,647.5C 582.366,645.548 583.199,643.882 584.5,642.5 Z"
//           />
//         </g>
//       );
    
//       let g6 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 753.5,643.5 C 775.805,643.961 784.305,654.961 779,676.5C 767.998,695.585 751.831,702.419 730.5,697C 720.771,689.925 718.271,680.759 723,669.5C 728.813,655.506 738.98,646.839 753.5,643.5 Z M 751.5,650.5 C 767.075,650.914 773.908,658.914 772,674.5C 764.029,689.739 751.863,694.906 735.5,690C 730.688,685.899 728.855,680.732 730,674.5C 733.9,663.44 741.067,655.44 751.5,650.5 Z"
//           />
//         </g>
//       );
    
//       let g7 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 814.5,642.5 C 817.272,642.22 819.772,642.887 822,644.5C 825.231,649.148 826.064,654.148 824.5,659.5C 822.801,659.66 821.134,659.494 819.5,659C 818.594,656.553 817.761,654.053 817,651.5C 815.612,650.446 814.112,650.28 812.5,651C 801.41,658.368 794.743,668.534 792.5,681.5C 792.5,690.999 797.166,694.832 806.5,693C 812.218,690.471 817.884,687.971 823.5,685.5C 828.024,686.24 828.69,688.406 825.5,692C 815.049,699.707 803.716,701.374 791.5,697C 785.453,692.365 783.286,686.198 785,678.5C 789.179,661.825 799.012,649.825 814.5,642.5 Z"
//           />
//         </g>
//       );
    
//       let g8 = (
//         <g>
//           <path
//             style={{ opacity: "1" }}
//             key={uuid()}
//             fill="#FF0000"
//             d="M 700.5,647.5 C 703.85,647.335 707.183,647.502 710.5,648C 717.813,648.652 720.313,652.486 718,659.5C 716.92,661.996 715.586,664.33 714,666.5C 707.191,671.148 700.691,676.148 694.5,681.5C 695.128,683.258 696.128,684.758 697.5,686C 701.723,687.944 706.056,689.611 710.5,691C 712.439,691.908 713.439,693.408 713.5,695.5C 708.372,696.779 703.372,696.279 698.5,694C 694.323,691.152 690.156,688.318 686,685.5C 685.228,685.645 684.561,685.978 684,686.5C 683.485,690.577 682.651,694.577 681.5,698.5C 679.389,699.848 677.555,699.515 676,697.5C 676.536,682.407 678.203,667.407 681,652.5C 687.457,650.248 693.957,648.581 700.5,647.5 Z M 694.5,654.5 C 699.5,654.5 704.5,654.5 709.5,654.5C 707.883,659.531 704.883,663.697 700.5,667C 696.353,670.909 691.686,674.076 686.5,676.5C 685.304,671.142 685.471,665.809 687,660.5C 688.707,657.41 691.207,655.41 694.5,654.5 Z"
//           />
//         </g>
//       );

//     let [array, setArray] = useState([])

//   useEffect(() => {
//     array = [{ name: g1, id: uuid() },
//         { name: g2, id: uuid() },
//         { name: g3, id: uuid() },
//         { name: g4, id: uuid() },
//         { name: g5, id: uuid() },
//         { name: g6, id: uuid() },
//         { name: g7, id: uuid() },
//         { name: g8, id: uuid() }]
//     const tl = gsap.timeline({ defaults: { ease: "back.out" } });

//     array.forEach((group, index) => {
//       tl.to(group.name, {
//         duration: 0.5,
//         x: index % 2 === 0 ? -100 : 100,
//         y: -100,
//         opacity: 0,
//         stagger: 0.1,
//       });
//     });
//     setArray(a)
//   }, [array]);

//   console.log( array );

//   return (
//     <div className="w-full h-screen flex justify-center items-center">
//       <svg width="912px" height="912px">
//         {array.map((elt, index) => (
//           <g transform={`translate(${(index + 1) * 20}, 50)`} key={elt.id}>
//             {" "}
//             {elt.name}{" "}
//           </g>
//         ))}
//       </svg>
//     </div>
//   );
// }

// export default GroupExplosion;
