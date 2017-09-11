public class GetMinMaxString {
    public String getMinMaxString(String _str) {
        String str[]=_str.split(" ");
        int min=Integer.MAX_VALUE;
        int max=Integer.MIN_VALUE;
        int temp=0;
        for(String s:str){
            temp=Integer.parseInt(s);
            if(min>temp){
                min=temp;
            }
            if(max<temp){
                max=temp;
            }
        }
        return min+" "+max;
    }

    public static void main(String[] args) {
        String str = "1 2 3 4";
        GetMinMaxString minMax = new GetMinMaxString();
        //아래는 테스트로 출력해 보기 위한 코드입니다.
        System.out.println("최대값과 최소값은?" + minMax.getMinMaxString(str));
    }
}