public class ReverseStr {
	public String reverseStr(String str){
		String result="";
		int length=122;
        for(int i=length;i>=length-25;i--){
			for(int j=0;j<str.length();j++){
				if(i==(int)str.charAt(j)){
					result+=str.charAt(j);
				}
			}
		}
		length=90;
        for(int i=length;i>=length-25;i--){
			for(int j=0;j<str.length();j++){
				if(i==(int)str.charAt(j)){
					result+=str.charAt(j);
				}
			}
        }
		return result;
	}

	// 아래는 테스트로 출력해 보기 위한 코드입니다.
	public static void main(String[] args) {
		ReverseStr rs = new ReverseStr();
		System.out.println( rs.reverseStr("azAZ") );
	}
}