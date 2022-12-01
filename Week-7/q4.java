import java.util.Stack;

public class q4 {

    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for( int i = 0 ; i < s.length() ; i++ ){
            char ch = s.charAt(i);
            if( ch == '(' || ch == '{' || ch == '[' ){
                st.push(ch);
            }else if( st.size() > 0 ){
                if( (st.peek() == '{' && ch == '}') || (st.peek() == '(' && ch == ')') || (st.peek() == '[' && ch == ']') ){
                    st.pop();
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }
    
        if( st.size() != 0 ){
            return false;
        }
        return true;
    };
    
}