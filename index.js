 
const btn = document.getElementById("btn");
btn.addEventListener("click",someCode);
function someCode() {
            const birthDate = document.getElementById("date").value;
            const btn = document.getElementById("btn");
            console.log(birthDate);

            const bd = new Date(birthDate);
            const D1 = bd.getDate();
            const M1 = bd.getMonth();
            const Y1 = bd.getFullYear();

            const date = new Date();
            var D2 = date.getDate();
            var M2 = 1 + date.getMonth();
            var Y2 = date.getFullYear();

            var Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (D1 > D2) {
                D2 = D2 + Month[M2 - 1];
                M2 = M2 - 1;
            }
            if (M1 > M2) {
                M2 = M2 + 12;
                Y2 = Y2 - 1;
            }
            var D = D2 - D1;
            var M = M2 - M1;
            var Y = Y2 - Y1;
            console.log("Your Age Is " + Y + " Years " + M + " Months " + D + " Days");
        }         