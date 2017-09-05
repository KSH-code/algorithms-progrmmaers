class Solution {
    public boolean solution(int[] arr) {
        int _arr[]=new int[arr.length+1];
        for(int i = 0; i<arr.length;i++){
            if(arr[i]>arr.length)
                return false;
            _arr[arr[i]]=1;
        }
        for(int i=1;i<_arr.length;i++){
            if(_arr[i]!=1){
                return false;
            }
        }
        return true;
    }
}