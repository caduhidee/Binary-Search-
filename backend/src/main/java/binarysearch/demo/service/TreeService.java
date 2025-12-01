package binarysearch.demo.service;

import org.springframework.stereotype.Service;

@Service
public class TreeService {
    private Node root;

    public void saveTree (Node root){
        this.root = root;
    }

    public Node getTree(){
        return root;
    }

    public Node search(Node root, int target) {

        System.out.println("Root node num: " + root.getNum());
        System.out.println("Searching for: " + num);
        if (root == null) {
            return null;
        }

        if (target == root.num) {
            return root; 
        }

        if (target < root.num) {
            return search(root.left, target);
        } else {
            return search(root.right, target);
        }
    }

    public Node searchFromRoot(int value) {
        return search(root, value);
    }
}