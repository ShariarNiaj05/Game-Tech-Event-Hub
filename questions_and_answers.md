<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Answer: A: {}

<i>In the first line a variable is declared name as greeting. in the second line the variable value has been assigned as empty object({}). In the Third line the variable has been consol.log. So the output will be {} (empty object).</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>When the function sum has been called two argument has been passed. First one is **number 1** and second one is **string 2**. In JS when a number and a string sum up the value will `concatinate` (will be placed side by side rather than make the addition). So the answer will be "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>In the first line of the code the food variable has been declared `in an array`. In the second line a info variable has been declared `in an object` by referencing the food variable's index 0 (food[0]). After thet info.favoriteFood value has been changes that has no relation with the actual food variable that has been declared in the first line. In the last line food variable has been console and the answer is A: ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>When the function sayHi call in the console it's expecting a argument name. But when the function has been called up no argument has been given. So the function is returning `Hi there (as it's static), undefined(as no argument has been passed in the paremeter name position)`</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>The for each method's if condition is checking if the value is `truthy or falsy`. If the value is truthy the iteration will be executed else it'll not enter to the loop. in the nums variable there is 4 index and the value is 0 (which is falsy in JS), 1, 2, 3. So when loop variable runs for the first time it will get 0 that is falsy, so it'll now entered to to loop. For the rest of the element the loop will be executed. And the answer is C: 3.</i>

</p>
</details>
