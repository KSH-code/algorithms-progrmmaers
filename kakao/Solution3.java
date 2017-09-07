class Solution{
    public int[] solution(int[][] v) {
        int check[]=new int[2];
        for(int[] p:v){
            boolean a=false,b=false;
            for(int[] temp:v){
                if(p==temp){
                    continue;
                }else{
                    if(temp[0]==p[0]){
                        a=true;
                    }
                    if(temp[1]==p[1]){
                        b=true;
                    }
                }
            }   
            if(!a)
                check[0]=p[0];
            if(!b)
                check[1]=p[1];
        }
        return check;
    }
}