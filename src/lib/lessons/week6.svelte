<script>

</script>

<style>
	.header {
		text-align: left;
	}
	.header * {
		display: inline-block;
	}
	.content {
		text-align: left;
		display: block;
	}
	img {
        max-height: 50%;
        max-width: 50%;
    }
</style>

<!-- begin HTML -->
<div class=container>
	<div class=header>
		<h1>Week 6 |</h1>
		<h2>Automated Testing</h2>
	</div>
	<div class=content>

	<p>
		Automated software testing is a process in which software tools execute pre-scripted tests on a software application before it is released into production.
		Software testing is a method of assessing the functionality of a software program.
		There are many different types of software testing but the two main categories are dynamic testing and static testing, both of which are often used together.
	</p>
	<ul>
		<li>Dynamic Testing: an assessment that is conducted while the program is executed</li>
		<li>Static Testing: is an examination of the program's code and associated documentation</li>
	</ul>

	<h3>The 5 Essentials of Software Testing</h3>
	<ul>
		<li>Test Strategy: tells you what types of testing and the amount of testing you think will work best at finding the defects that are lurking in the software</li>
		<li>Test Plan: the testing tasks you will need to execute to carry out that strategy</li>
		<li>Test Cases: have been prepared in advance in the form of detailed examples you will use to check that the software will actually meet its requirements</li>
		<li>Test Data: consisting of both input test data and database test data to use while you are executing your test cases</li>
		<li>Test Environment: where the tests are being carried out</li>
	</ul>
	<h3>Types of Automated Testing<h3>
	<ul>
		<li>
			Unit Testing: Testing done at the code level. 
			Bugs are identified in the functions, methods and routines written by developers.
			Due to the presence of unit tests, whenever the code compiles, all unit tests run and tell us the result that whether all functionality is working. 
			If any unit test fails, that means there is now a bug present in the production code.
			Some of the most popular tools present in the market are NUnit and JUnit. 
			Microsoft also provided its own framework for unit testing called MSTest.
		</li>
		<li>
			Automated Web Service / API Tests: An Application Programming Interface (API) makes it possible for software to talk to other software applications. 
			Just like any other software, APIs need to be tested.
			We test here is usually the functionality, compliance and security issues. 
			In web applications, we can test the Request and Response of our application that whether they are secure and encrypted or not.
		</li>
		<li>
			GUI Tests: GUI’s are highly subject to change. But this type of testing is also
			closest to what users will do with our application. Since the user will use the mouse and
			keyboard, automated GUI tests also mimic the same behavior by making use of mouse
			and keyboard to click or write to objects present on the user interface.
		</li>
	</ul>
	<h3>10 Best Practices and Strategies for Test Automation</h3>

	<ol type="1">
		<li>Hire a Dedicated Automation Engineer or Team</li>
		<li>An automation tool is important, but it is not the solution of everything</li>
		<li>Select the automation tool which is familiar to your resources</li>
		<li>Know the application being tested</li>
		<li>Good Automation means good manual test case</li>
		<li>Identify opportunities with automation</li>
		<li>You cannot automate everything</li>
		<li>Avoid GUI Automation when there is an alternate present</li>
		<li>Use Automation for other useful purposes as well</li>
		<li>Automation is software development</li>
	</ol>

	</div>
</div>