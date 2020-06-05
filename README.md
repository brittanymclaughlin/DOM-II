# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ 1] Create a forked copy of this project.
* [ ] Add your project manager as collaborator on Github.
* [ 1] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [ 1] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ 1] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ 1] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [ ] Add your project manager as a reviewer on the pull-request
* [ ] Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Set Up LESS Preprocessor

* [1 ] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [1 ] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [1 ] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [ 1] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [1 ] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [1] `mouseover`
	* [1] `keydown`
	* [1] `wheel`
	* [ ] `drag / drop`
	* [1] `load`
	* [ ] `focus`
	* [1] `resize`
	* [1] `scroll`
	* [ ] `select`
	* [1] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ 1] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ 1] Stop the navigation items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.
