import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
public class Main {
    public static void main(String[] args) {
        // Your code here
        Scanner sc = new Scanner(System.in);
        int k = 2;
        if (k == 1) {
            System.out.println(2);
        } else {
            int count = 0, i = 1, num = 0;
            char arr[] = { '1', '3', '4', '5', '6', '7', '8', '9' };
            while (count < k) {

                String s = String.valueOf(i);
                boolean flag = true;
                for (int j = 0; j < arr.length && flag; j++) {
                    if (s.contains(String.valueOf(arr[j]))) {
                        flag = false;
                    }
                }
                if (flag) {
                    count++;
                    num = i;
                }
          i++;
            }

            System.out.println(num);
        }
    }
}