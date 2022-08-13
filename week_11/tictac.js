function Player1(){
    return('X');
}

function Player2(){
    return('O')
}


let player = Player1();
let turn = 1;
let arr = []


function gameOver(element){
    
    if (element == 'X'){
        $('#winnerAlert').attr('class', 'alert alert-warning')
        $('#winnerAlert').text("Game Over!\n\n Player 1 Wins")
    }else{
        $('#winnerAlert').attr('class', 'alert alert-warning')
        $('#winnerAlert').text("Game Over!\n\n Player 2 Wins")
    }
    
}

function checkRow(){
    let element = '';
    
    arr = [];
    
    [].forEach.call(document.querySelectorAll('table > tbody > tr > td'), function(td, index){
        arr.push((td).innerText)    
    })
    
    if((arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X')  || (arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O')) {
        element = arr[0]
        gameOver(element)
    }
    else if((arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') || (arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O'))
    {
        element = arr[3]
        gameOver(element)
    }
    else if((arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') || (arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O')){
        element = arr[6]
        gameOver(element)
    }
    else if((arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') || (arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O')){
        element = arr[0]
        gameOver(element)
    }
    else if((arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') || (arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O')){
        element = arr[1]
        gameOver(element)
    }
    else if((arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') || (arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O')){
        element = arr[2]
        gameOver(element)
    }
    else if((arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') || (arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O')){
        element = arr[0]
        gameOver(element)
    }
    else if((arr[6] == 'X' && arr[4] == 'X' && arr[2] == 'X') || (arr[6] == 'O' && arr[4] == 'O' && arr[2] == 'O')){
        element = arr[6]
        gameOver(element)
    }else if(turn == 10){
        
        $('#winnerAlert').attr('class', 'alert alert-warning')
        $('#winnerAlert').text("No one won!")
        
    }

}

function Turn(){
    
    if(player == Player1()){
        player = Player2();
        $('#heading').text('It\'s player 2\'s turn')
        turn++
    }else{
        player = Player1();
        $('#heading').text('It\'s player 1\'s turn')
        turn++
    }
    checkRow()
}

function Game(){
        
    
            $('button').on('click', function(){
                restart();
            })
    
            $('#heading').text('It\'s player 1\'s turn')
            
    
            $("#1").on('click', function(){
                if($('#1').text() == ''){ 
                $('#1').text(player)
                    Turn()
                }
                
            })
            
            $("#2").on('click', function(){
                if($('#2').text() == ''){ 
                $('#2').text(player)
                Turn()
                }
            })
            
            $("#3").on('click', function(){
                if($('#3').text() == ''){ 
                $('#3').text(player)
                Turn()
                }
            })
            
            $("#4").on('click', function(){
                if($('#4').text() == ''){ 
                $('#4').text(player)
                Turn()
                }
            })
            
            $("#5").on('click', function(){
                if($('#5').text() == ''){ 
                $('#5').text(player)
                Turn()
                }
            })
            
            $("#6").on('click', function(){
                if($('#6').text() == ''){ 
                $('#6').text(player)
                Turn()
                }
            })
            
            $("#7").on('click', function(){
                if($('#7').text() == ''){ 
                $('#7').text(player)
                Turn()
                }
            })
            
            $("#8").on('click', function(){
                if($('#8').text() == ''){ 
                $('#8').text(player)
                Turn()
                }
            })
            
            $("#9").on('click', function(){
                if($('#9').text() == ''){ 
                $('#9').text(player)
                Turn()
                }
            })
        
    
}   
    


function restart(){
    
    [].forEach.call(document.querySelectorAll('table > tbody > tr > td'), function(td, index){
        td.innerHTML = ''    
    })
    $('#heading').text('It\'s player 1\'s turn')
    player = Player1();
    turn = 1;
    $('#winnerAlert').attr('class', '')
    $('#winnerAlert').text('')

    
}

Game();
