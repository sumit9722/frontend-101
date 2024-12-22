const checkboxs = document.querySelectorAll(".checkbox");
let prev = 0;

checkboxs.forEach((ele) => {
    ele.addEventListener('click', function(e) {
        if(e.target.checked)
        {
            if(e.shiftKey && prev)
            {
                let start = Math.min(prev, parseInt(e.target.id));
                let end = Math.max(prev, parseInt(e.target.id));
                for(let i = start; i <= end; i++)
                {
                    document.getElementById(i.toString()).checked = true;
                }
            }
            prev = parseInt(e.target.id);
        }
        else
        {
            prev = 0;
        }
    });
})