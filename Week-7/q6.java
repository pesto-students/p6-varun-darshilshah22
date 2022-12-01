import java.util.Stack;

class MyQueue {
    Stack<Integer> mainS;
    Stack<Integer> helperS;

    public MyQueue() {
        mainS = new Stack<>();
        helperS = new Stack<>();
    }

    public void push(int x) {
        mainS.add(x);
    }

    public int pop() {
        if (mainS.size() != 0) {
            while (mainS.size() != 0) {
                helperS.push(mainS.pop());
            }

            int val = helperS.pop();
            while (helperS.size() != 0) {
                mainS.add(helperS.pop());
            }

            return val;
        } else {
            System.out.println("Queue underflow");
            return -1;
        }
    }

    public int peek() {
        if (mainS.size() != 0) {
            while (mainS.size() != 0) {
                helperS.push(mainS.pop());
            }

            int val = helperS.peek();
            while (helperS.size() != 0) {
                mainS.add(helperS.pop());
            }
            return val;
        } else {
            System.out.println("Queue underflow");
            return -1;
        }
    }

    public boolean empty() {
        if (mainS.size() == 0) {
            return true;
        } else {
            return false;
        }
    }
}