package com.company;

public class Main {

    public static void main(String[] args) {
//                 1
//                / \
//               2   2
//              / \ / \
//             3  4 4  3
        Tree<Integer> tree = new Tree<>(99);
        tree.left = new Tree<Integer>(100);
        tree.right = new Tree<Integer>(99);
        boolean answer = isTreeSymmetric(tree);
        System.out.println(answer);
    }

    static boolean isTreeSymmetric(Tree<Integer> tree) {
        if (tree == null) {
            return true;
        }
        return isTreeSymmetric(tree.left, tree.right);
    }

    static boolean isTreeSymmetric(Tree<Integer> left, Tree<Integer> right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null) {
            return false;
        }
        if (left.value != right.value) {
            return false;
        }
        return isTreeSymmetric(left.left, right.right) && isTreeSymmetric(right.left, left.right);
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