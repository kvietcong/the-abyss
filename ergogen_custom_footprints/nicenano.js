// nice!nano v2
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: 'MCU',
    orientation: 'down',
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    RST: {type: 'net', value: 'RST'},
    VCC: {type: 'net', value: 'VCC'},
    P33: {type: 'net', value: 'P33'},
    P32: {type: 'net', value: 'P32'},
    P31: {type: 'net', value: 'P31'},
    P21: {type: 'net', value: 'P21'},
    P20: {type: 'net', value: 'P20'},
    P19: {type: 'net', value: 'P19'},
    P18: {type: 'net', value: 'P18'},
    P15: {type: 'net', value: 'P15'},
    P14: {type: 'net', value: 'P14'},
    P16: {type: 'net', value: 'P16'},
    P10: {type: 'net', value: 'P10'},
    P1: {type: 'net', value: 'P1'},
    P0: {type: 'net', value: 'P0'},
    P2: {type: 'net', value: 'P2'},
    P3: {type: 'net', value: 'P3'},
    P4: {type: 'net', value: 'P4'},
    P5: {type: 'net', value: 'P5'},
    P6: {type: 'net', value: 'P6'},
    P7: {type: 'net', value: 'P7'},
    P8: {type: 'net', value: 'P8'},
    P9: {type: 'net', value: 'P9'}
  },
  body: p => {
    const standard = `
      (module ProMicro (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* illustration of the (possible) USB port overhang */}
      (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))

      ${''/* component outline */}
      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))
      `
    function pins(def_neg, def_pos) {
      return `
        ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
        (fp_line (start -15.24 ${def_pos}6.35) (end -12.7 ${def_pos}6.35) (layer F.SilkS) (width 0.15))
        (fp_line (start -15.24 ${def_pos}6.35) (end -15.24 ${def_pos}8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -12.7 ${def_pos}6.35) (end -12.7 ${def_pos}8.89) (layer F.SilkS) (width 0.15))

        ${''/* pin names */}
        (fp_text user RAW (at -13.97 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -11.43 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user RST (at -8.89 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user VCC (at -6.35 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P21 (at -3.81 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P20 (at -1.27 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P19 (at 1.27 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P18 (at 3.81 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P15 (at 6.35 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P14 (at 8.89 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P16 (at 11.43 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P10 (at 13.97 ${def_pos}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        (fp_text user P01 (at -13.97 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P00 (at -11.43 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -8.89 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user GND (at -6.35 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P02 (at -3.81 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P03 (at -1.27 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P04 (at 1.27 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P05 (at 3.81 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P06 (at 6.35 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P07 (at 8.89 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P08 (at 11.43 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
        (fp_text user P09 (at 13.97 ${def_neg}4.8 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

        ${''/* and now the actual pins */}
        (pad 1 thru_hole rect (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RAW.str})
        (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST.str})
        (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
        (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21.str})
        (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20.str})
        (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19.str})
        (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P18.str})
        (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P15.str})
        (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P14.str})
        (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P16.str})
        (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P10.str})

        (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1.str})
        (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P0.str})
        (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND.str})
        (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2.str})
        (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3.str})
        (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4.str})
        (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5.str})
        (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P6.str})
        (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P7.str})
        (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P8.str})
        (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P9.str})

        (pad 31 thru_hole circle (at 8.89 ${def_neg}5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P31.str})
        (pad 32 thru_hole circle (at 8.89 ${def_neg}2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P32.str})
        (pad 33 thru_hole circle (at 8.89 ${def_neg}0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P33.str})
      `
    }
    if(p.orientation == 'down') {
      return `
        ${standard}
        ${pins('-', '')})
        `
    } else {
      return `
        ${standard}
        ${pins('', '-')})
        `
    }
  }
}

// module.exports = {
//   params: {
//     designator: 'MCU',
//     orientation: 'down',
//     RAW: {type: 'net', value: 'RAW'},
//     GND: {type: 'net', value: 'GND'},
//     RST: {type: 'net', value: 'RST'},
//     VCC: {type: 'net', value: 'VCC'},
//     P21: {type: 'net', value: 'P21'},
//     P20: {type: 'net', value: 'P20'},
//     P19: {type: 'net', value: 'P19'},
//     P18: {type: 'net', value: 'P18'},
//     P15: {type: 'net', value: 'P15'},
//     P14: {type: 'net', value: 'P14'},
//     P16: {type: 'net', value: 'P16'},
//     P10: {type: 'net', value: 'P10'},
//     P1: {type: 'net', value: 'P1'},
//     P0: {type: 'net', value: 'P0'},
//     P2: {type: 'net', value: 'P2'},
//     P3: {type: 'net', value: 'P3'},
//     P4: {type: 'net', value: 'P4'},
//     P5: {type: 'net', value: 'P5'},
//     P6: {type: 'net', value: 'P6'},
//     P7: {type: 'net', value: 'P7'},
//     P8: {type: 'net', value: 'P8'},
//     P9: {type: 'net', value: 'P9'}
//   },
//   body: p => {
//       return `
//       (module nice_nano (layer F.Cu) (tedit 6058B206)
//           ${p.at /* parametric position */}
//           (fp_text reference U1 (at 0 1.625) (layer F.SilkS) hide
//               (effects (font (size 1.2 1.2) (thickness 0.2032)))
//           )
//           (fp_text value nice_nano (at 0 0) (layer F.SilkS) hide
//               (effects (font (size 1.2 1.2) (thickness 0.2032)))
//           )
//           (fp_line (start -15.24 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start 15.24 -8.89) (end -15.24 -8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer B.SilkS) (width 0.381))
//           (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer B.SilkS) (width 0.381))
//           (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.381))
//           (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer B.SilkS) (width 0.381))
//           (fp_line (start -15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start -17.78 8.89) (end -15.24 8.89) (layer F.SilkS) (width 0.381))
//           (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
//           (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
//           (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
//           (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))
//           (fp_text user RST (at -8.89 -5.588 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 006 (at -13.97 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 006 (at -13.97 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 008 (at -11.5 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 020 (at -1.2 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 017 (at -3.8 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user GND (at -6.35 5.461 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user GND (at -8.89 5.461 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 022 (at 1.3 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 024 (at 3.81 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 100 (at 6.35 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 104 (at 11.43 5.53719 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 010 (at 11.43 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 111 (at 8.89 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 113 (at 6.35 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 115 (at 3.81 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 002 (at 1.27 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 029 (at -1.27 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 031 (at -3.81 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user VCC (at -6.35 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user RST (at -8.89 -5.588 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user GND (at -11.43 -5.454667 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user RAW (at -13.97 -5.473715 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user RAW (at -13.97 -5.473715 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user GND (at -11.43 -5.454667 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user VCC (at -6.35 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 031 (at -3.81 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 029 (at -1.27 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 002 (at 1.27 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 115 (at 3.81 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 113 (at 6.35 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 111 (at 8.89 -5.537191 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 010 (at 11.43 -5.537191 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)))
//           )
//           (fp_text user 104 (at 11.43 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 100 (at 6.35 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 024 (at 3.8 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 022 (at 1.3 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user GND (at -8.89 5.461 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user GND (at -6.35 5.461 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 017 (at -3.81 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 020 (at -1.2 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user 008 (at -11.5 5.53719 ${p.rot + 90}) (layer B.SilkS)
//               (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror))
//           )
//           (fp_text user nice!nano (at 13.462 -0.254 ${p.rot + 90}) (layer F.SilkS)
//               (effects (font (size 1.5 1.5) (thickness 0.3)))
//           )
//           (pad 33 thru_hole circle (at 8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 32 thru_hole circle (at 8.89 2.54) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 31 thru_hole circle (at 8.89 5.08) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 24 thru_hole circle (at -13.97 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 12 thru_hole circle (at 13.97 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 23 thru_hole circle (at -11.43 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 22 thru_hole circle (at -8.89 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 21 thru_hole circle (at -6.35 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 20 thru_hole circle (at -3.81 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 19 thru_hole circle (at -1.27 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 18 thru_hole circle (at 1.27 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 17 thru_hole circle (at 3.81 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 16 thru_hole circle (at 6.35 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 15 thru_hole circle (at 8.89 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 14 thru_hole circle (at 11.43 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 13 thru_hole circle (at 13.97 -7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 11 thru_hole circle (at 11.43 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 10 thru_hole circle (at 8.89 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 9 thru_hole circle (at 6.35 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 8 thru_hole circle (at 3.81 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 7 thru_hole circle (at 1.27 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 6 thru_hole circle (at -1.27 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 5 thru_hole circle (at -3.81 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 4 thru_hole circle (at -6.35 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 3 thru_hole circle (at -8.89 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 2 thru_hole circle (at -11.43 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//           (pad 1 thru_hole circle (at -13.97 7.62) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask))
//       )
//       `
//   }};
