import { Question } from "../types/types";

export const fakeData: Question[] = [
    {
        _id: "66097045413c25973331843b",
        title: "Largest Element in an Array",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/largest-element-in-the-array-largest-element-in-the-array_5026279?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "660fd2a3fd93cc568880a877",
        title: "Time and Space Complexity",
        category: "basic",
        status: "done",
        difficulty: "easy",
        notes: "Refer Image-1",

        quelink2: "",
        videoLink: "https://youtu.be/5T0SiJocPCI?si=EwqeYH6aKo_mrexr",
        tufLink: "",
    },
    {
        _id: "660fd37cfd93cc568880a87e",
        title: "C++ STL",
        category: "basic",
        status: "pending",
        difficulty: "easy",
        notes: "Complete pair , vector",

        quelink2: "",
        videoLink: "https://youtu.be/RRVYpIET_RU?si=RESKxNqbeyapGphc",
        tufLink: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers/",
    },
    {
        _id: "6610d87b8a1774315a6c15b4",
        title: "Pointers",
        category: "basic",
        status: "done",
        difficulty: "easy",
        notes: 'Pointers behave differ with int aray, chars, passing int arr to functions,\n#include <bits/stdc++.h>\nusing namespace std;\n\nvoid print(int arr[], int n) {\n    cout << sizeof(arr) << endl; // 8 as it is a pointer, internally it is *arr\n    for (int i = 0; i < n; i++) {\n        cout << arr[i] << " ";\n    }\n    cout << endl;\n}\n\nint main() {\n    cout << endl << endl;\n    // ! POINTERS\n    // int num = 5;\n    // int* ptr = &num;\n\n    // ! CHAR AND POINTERS\n    // // (*ptr)++; // num = 6\n    // *ptr++; // address of num + 1+\n\n    // cout << *ptr << endl; // address of num\n    // cout << num << endl;\n\n    // char ch[] = "hello";\n    // char* ptr1 = ch;\n    // cout << ptr1 << endl; // hello\n    // cout << *ptr1 << endl; // h\n\n\n    // char* ch1 = "lol"; // bad practice => read only memory \n\n    // ! ARRAY AND POINTERS\n    int arr[] = { 10, 20, 30, 40 };\n    int* ptr = arr;\n\n    print(arr, 4);\n\n    // cout << ptr << endl; // 10\n    // cout << arr;\n\n    return 0;\n}',

        quelink2: "",
        videoLink: "https://youtu.be/YHwEIfrXZgE?si=btrmAeUfvg1JhaqW",
        tufLink: "",
    },
    {
        _id: "6613d2692c26c4bf6c1d6729",
        title: "Dynamic Memory Allocation",
        category: "basic",
        status: "done",
        difficulty: "easy",
        notes: "Macros as almost same as inline functions in CPP",

        quelink2: "",
        videoLink: "",
        tufLink: "",
    },

    {
        _id: "662647d5712ea0b3c87a57eb",
        title: "Longest subarray with given sum K(positives)",
        category: "array",
        status: "revisit",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_6682399?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662647f6712ea0b3c87a57ee",
        title: "Longest subarray with sum K (Positives + Negatives)",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/longest-subarray-with-sum-k_5713505?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662e2319e1d5cbdd6956a68e",
        title: "OOPs Part-1 ( After Arrays )",
        category: "basic",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2: "",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f49a2ce4650feafa40221",
        title: "Sum Of Max And Min",
        category: "array",
        status: "done",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/sum-of-max-and-min_1081476?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f49c3ce4650feafa40224",
        title: "Kth Smallest and Largest Element of Array",
        category: "array",
        status: "done",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/kth-smallest-and-largest-element-of-array_1115488?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f49d9ce4650feafa40227",
        title: "Sort 0 1 2",
        category: "array",
        status: "done",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/sort-0-1-2_631055?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f49eace4650feafa4022a",
        title: "Move All Negative Numbers To Beginning And Positive To End",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/move-all-negative-numbers-to-beginning-and-positive-to-end_1112620?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f4a2505978eb24ff5f201",
        title: "Rotate array by 'k' steps",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/rotate-array_1230543?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f4a3205978eb24ff5f204",
        title: "Pair Sum",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/pair-sum_1171154?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f4a6905978eb24ff5f207",
        title: "Product Of Array Except Self",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/product-of-array-except-self_630271?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f4a8b05978eb24ff5f20a",
        title: "Majority element",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/majority-element_842495?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
    {
        _id: "662f4ab605978eb24ff5f20d",
        title: "Chess Tournament",
        category: "array",
        status: "pending",
        difficulty: "easy",
        notes: "",

        quelink2:
            "https://www.naukri.com/code360/problems/chess-tournament_981299?topList=love-babbar-dsa-sheet-problems&problemListRedirection=true",
        videoLink: "",
        tufLink: "",
    },
];
