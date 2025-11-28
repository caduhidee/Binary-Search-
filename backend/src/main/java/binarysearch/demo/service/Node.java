package binarysearch.demo.service;

public class Node {
    int num;
    Node left, right;

    public Node() {}

    public Node(int num) {
        this.num = num;
    }

    public int getNum(){
        return num;
    }

    public void setLeft(Node left){
        this.left = left;
    }

    public Node getRight() {
        return right;
    }

    public void setRight(Node right){
        this.right = right;
    }

}
