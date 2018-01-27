package com.company;

public class Main {

    public static void main(String[] args) {
        Tree<Integer> tree = new Tree<Integer>(8);
        int sum = 8;

        tree.right = new Tree<Integer>(3);
        boolean result = hasPathWithGivenSum(tree, sum);
        System.out.println(result);
    }

    public static boolean hasPathWithGivenSum(Tree<Integer> t, int s) {
        if (t == null && s == 0) {
            return true;
        }
        return hasPathWithGivenSum(t, s, 0);
    }

    public static boolean hasPathWithGivenSum(Tree<Integer> t, int s, int sum) {
        if (t == null) {
            return false;
        }
        if (t.left == null && t.right == null) {
            return sum + t.value == s;
        }
        boolean left = hasPathWithGivenSum(t.left, s, sum + t.value);
        boolean right = hasPathWithGivenSum(t.right, s, sum + t.value);
        return left || right;
    }
}

class Tree<T> {
    Tree(T x) {
        value = x;
    }

    T value;
    Tree<T> left;
    Tree<T> right;
}