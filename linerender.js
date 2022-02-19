var x1 = 0
    var y1 = 0
    var x2 = 0
    var y2 = 0

    document.querySelector('#setline').addEventListener('click', () => {
        console.log('setting up line');
        $(`<line x1="${y1 + 10}" y1="${x1 + 10}" x2="${y2 + 10}" y2="${x2 + 10}" style='stroke: white; stroke-width: 3px'></line>`).prependTo(document.querySelector('svg'));
        $('.lines').html($('.lines').html());
        // $(#container').html($('#container').html());
    })

document.querySelector('#fixedline').addEventListener('click', () => {
    document.querySelectorAll(".grid").forEach((item) => {
        // console.log("grid");
        // console.log(item);
        item.addEventListener("click", () => {
            var x = gsap.getProperty(item, 'top');
            var y = gsap.getProperty(item, 'left');
            console.log(`X: ${x}, Y: ${y}`);
            document.body.addEventListener("keypress", (e) => {
                if(e.key == 'o') {
                x1 = x;
                y1 = y;
                // console.log(`X1: ${x1}, Y1: ${y1}`);
                // ended();
                }
                if(e.key == 'p') {
                x2 = x;
                y2 = y;
                // console.log(`X2: ${x2}, Y2: ${y2}`);
                // ended();
                }
                // if(e.key == 'Enter') {
                //   $(`<line x1="0" y1="0" x2="80" y2="30" style='stroke: white; stroke-width: 3px'></line>`).prependTo(document.querySelector('svg'));
                // }
                console.log(`X1: ${x1}, Y1: ${y1}, key: ${e.key}`);
                console.log(`X2: ${x2}, Y2: ${y2}, key: ${e.key}`);
                console.log(e.key);
            });
        });
    });
});