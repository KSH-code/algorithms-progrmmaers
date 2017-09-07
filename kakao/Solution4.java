class Solution
{
    public int solution(int [][]board)
    {
        int r=1;
        int max=1;
        boolean e=false;
        for(int i=0;i<board.length-1;i++){
            for(int j=0;j<board[i].length-1;j++){
                if(board[i][j]==1&&board[i][j+1]==1){
                    e=true;
                    for(int k=1;k<=r;k++){
                        if(i+k>=board.length||board[i+k][j+1]==0){
                            e=false;
                        }
                    }
                    if(e)
                        for(int l=0;l<r;l++){
                            if(board[i+r][j-l]==0){
                                e=false;
                            }
                        }
                    if(e){
                        r++;
                        if(r>max){
                            max=r;
                        }
                    }else{
                        e=false;
                    }
                }else{
                    e=false;
                }
                if(!e){
                    r=1;
                }
            }
        }
        return max*max;
    }
}