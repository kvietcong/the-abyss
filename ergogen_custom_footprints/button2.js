module.exports = {
    params: {
        designator: 'B', // for Button
        side: 'F',
        variant: '2_pin_th',
        from: undefined,
        to: undefined,
    },
    body: p => {
        if(p.variant == '4_pin_smd') {
            return `

            (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)
                (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/product-catalog/tact/product-lines/tl3342-series-low-profile-smt-tact-switch")
                (tags "SPST Tactile Switch")
                ${p.at /* parametric position */}
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
                (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

                ${'' /* outline */}
                (fp_line (start 2.75 1.25) (end 1.25 2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start 2.75 -1.25) (end 1.25 -2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start 2.75 -1.25) (end 2.75 1.25) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start -1.25 -2.75) (end 1.25 -2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start -2.75 1.25) (end -1.25 2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start -2.75 -1.25) (end -1.25 -2.75) (layer ${p.side}.SilkS) (width 0.15))
                (fp_line (start -2.75 -1.25) (end -2.75 1.25) (layer ${p.side}.SilkS) (width 0.15))

                ${'' /* pins */}
                (pad 1 smd rect (at -3.1 -1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from.str})
                (pad 1 smd rect (at 3.1 -1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.from.str})
                (pad 2 smd rect (at -3.1 1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to.str})
                (pad 2 smd rect (at 3.1 1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.to.str})
            )
            `
        } else if (p.variant === '2_pin_th') {
            // this footprint goes to both sides by default so it ignores the layer setting
            return `
            (module kbd:ResetSW (layer F.Cu) (tedit 5B9559E6) (tstamp 61905781)
                (descr "Two pin through hole Tactile Switch, the same as on the Corne")
                (tags "Tactile Switch")
                ${p.at /* parametric position */}
                ${'' /* footprint reference */}
                (fp_text reference "${p.ref}" (at 0 2.55) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
                (fp_text value "" (at 0 -2.55) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
                ${'' /* outline */}
                (fp_text user RESET (at 0 0 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
                (fp_text user RESET (at 0.127 0 ${p.rot}) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))
                (fp_line (start 3 1.5) (end 3 1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start 3 1.75) (end -3 1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start -3 1.75) (end -3 1.5) (layer B.SilkS) (width 0.15))
                (fp_line (start -3 -1.5) (end -3 -1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start -3 -1.75) (end 3 -1.75) (layer B.SilkS) (width 0.15))
                (fp_line (start 3 -1.75) (end 3 -1.5) (layer B.SilkS) (width 0.15))
                (fp_line (start -3 1.75) (end 3 1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start 3 1.75) (end 3 1.5) (layer F.SilkS) (width 0.15))
                (fp_line (start -3 1.75) (end -3 1.5) (layer F.SilkS) (width 0.15))
                (fp_line (start -3 -1.75) (end -3 -1.5) (layer F.SilkS) (width 0.15))
                (fp_line (start -3 -1.75) (end 3 -1.75) (layer F.SilkS) (width 0.15))
                (fp_line (start 3 -1.75) (end 3 -1.5) (layer F.SilkS) (width 0.15))
                ${'' /* pins */}
                (pad 2 thru_hole circle (at -3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask F.SilkS) ${p.from.str})
                (pad 1 thru_hole circle (at 3.25 0 ${p.rot}) (size 2 2) (drill 1.3) (layers *.Cu *.Mask F.SilkS) ${p.to.str})
            )
            `
        } else {
            throw 'Variant ${p.variant} not specified';
        }
    }
}
