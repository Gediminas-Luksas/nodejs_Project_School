
$(document).ready(function(){
    $('.delete-article').on('click', function(e){
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
            type: 'DELETE',
            url: '/articles/' + id,
            success: function(response){
                alert('Deleting Article');
                window.location.href='/';
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});

const panels = document.querySelectorAll('.panel');

function toggleOpen (){
   this.classList.toggle('open');
}

function toggleActive (e){
   if (e.propertyName.includes('flex')){
      this.classList.toggle('open-active');
   }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


