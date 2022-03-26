sap.ui.define([
    "sap/ui/core/Control"
], function (Control) {
    "use strict";
    return Control.extend('progressBar', {
        metadata: {
            properties: {
                value1: {
                    type: "string",
                    defaultValue: ""
                },
                value2: {
                    type: "string",
                    defaultValue: ""
                },
                 value3: {
                    type: "string",
                    defaultValue: ""
                },
                text: {
                    type: "string",
                    defaultValue: ""
                },
                identity: {
                    type: "string",
                    defaultValue: ""
                },
                color1: {
                    type: "string",
                    defaultValue: ""
                },
                color2: {
                    type: "string",
                    defaultValue: ""
                },
                total: {
                    type: "string",
                    defaultValue: ""
                }
            },
            events: {
                change: {
                    parameters: {
                        value: {
                            type: "string"
                        }
                    }
                }
            }
        },
        init: function () {

        },

        onAfterRendering: function () {
            this._renderCtx(document.getElementById(this.getIdentity()).getContext('2d'), this.getValue1(),this.getValue2(), this.getValue3(), this.getColor1(), this.getColor2(), this.getTotal());
        },

        _renderCtx: function (ctx, al, als,value3, color1, color2, total) {
            // var ctx = document.getElementById('circularLoader').getContext('2d');
            var start = 4.72;
            // var start1 = 3.14;
            var cw = ctx.canvas.width;
            var ch = ctx.canvas.height;
            var diff, diff1,diff2;
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
            diff1 = ((als / 100) * Math.PI * 2 * 10).toFixed(2);
            diff2 = ((value3 / 100) * Math.PI * 2 * 10).toFixed(2);
            ctx.clearRect(0, 0, cw, ch);
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.lineCap = "round";
            ctx.fillStyle = '#2c76a7';
            ctx.strokeStyle = color1;
            // "#3da5ea";
            ctx.font = "28px monospace";
            ctx.textAlign = "center";
            ctx.fillText(al + '%', cw * .52, ch * .5 + 5, cw + 12);

            ctx.beginPath();
            ctx.arc(100, 100, 82, start, diff / 10 + start, false); // Outer circle
            ctx.moveTo(120, 80);
            ctx.stroke();
            // Second Circle 
            ctx.beginPath();
            ctx.strokeStyle = color2;
            ctx.arc(100, 100, 70, start, diff1 / 10 + start, false);
            ctx.moveTo(120, 80);
            ctx.stroke();
            //Based on user input
            if (total === "3") {
                // Third Circle 
                ctx.beginPath();
                ctx.strokeStyle = "#2c76a7";
                ctx.arc(100, 100, 58, start, diff2 / 10 + start, false);  // Mouth (clockwise)
                ctx.moveTo(120, 80);
                ctx.stroke();
            }
        },


        renderer: function (oRM, oControl) {
            oRM.write("<div");
            oRM.writeControlData(oControl);
            oRM.writeClasses();
            oRM.write(">");
            var oRenderer = "<canvas id=" + "'" + oControl.getIdentity() + "'" + " width='200' height='200'>";
            oRM.write(oRenderer);
            oRM.write("/canvas>");
            oRM.write("</div>");
        }
    });
});
