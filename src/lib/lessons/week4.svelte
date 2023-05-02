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
		<h1>Week 4 |</h1>
		<h2>Linux Command Environment and Package Management</h2>
	</div>
	<div class=content>
	<h3>What is vi?</h3>
	<p>
		vi is the default editor that comes preinstalled with unix based operating systems. 
		vi can be started by typing "vi filename" into the terminal, and can then be closed 
		by typing exc and :q!.
	</p>

	<img src="https://static.javatpoint.com/linux/images/linux-vi-intro4.png" alt="Example vi view">

	<p>The unix vi editor has two modes:</p>
	<ul>
		<li>
			Command Mode, consisting of commands which cause action to be taken on the file. 
			Every character typed is a command that does something to the text file being 
			edited; a character typed in the command mode may even cause the vi editor to enter the insert mode
		</li>
		<li>
			Insert Mode, in which entered text is inserted into the file. Every character
			typed is added to the text in the file; pressing the escape key turns off the Insert mode.
		</li>
	</ul>
	<p>
		The cursor movement in vi is unlike how we are accustomed to in most everyday programs.
		Cursor and Screen Manipulation commands are as followed:  
	</p>
	<ul>
		<li>j or Return [or down-arrow] move cursor down one line</li>
		<li>* k [or up-arrow] move cursor up one line</li>
		<li>* h or Backspace [or left-arrow] move cursor left one character</li>
		<li>* l or Space [or right-arrow] move cursor right one character</li>
		<li>* 0 (zero) move cursor to start of current line (the one with the cursor)</li>
		<li>* $ move cursor to end of current line</li>
		<li>w move cursor to beginning of next word</li>
		<li>b move cursor back to beginning of preceding word</li>
		<li>:0Return or 1G move cursor to first line in file</li>
		<li>:nReturn or nG move cursor to line n</li>
		<li>:$Return or G move cursor to last line in file</li>
	</ul>
	<p>Editing Text</p>
	<ul>
		<li>* r replace single character under cursor (no Esc needed)</li>
		<li>R replace characters, starting with current cursor position, until Esc hit</li>
		<li>cw change the current word with new text, starting with the character under cursor, until Esc hit</li>
		<li>cNw change N words beginning with character under cursor, until Esc hit; e.g., c5w changes 5 words</li>
		<li>C change (replace) the characters in the current line, until Esc hit</li>
		<li>cc change (replace) the entire current line, stopping when Esc is hit</li>
		<li>Ncc or cNc change (replace) the next N lines, starting with the current line, stopping when Esc is hit</li>
		<li>* x delete single character under cursor</li>
		<li>Nx delete N characters, starting with character under cursor</li>
		<li>dw delete the single word beginning with character under cursor</li>
		<li>dNw delete N words beginning with character under cursor; e.g., d5w deletes 5 words</li>
		<li>D delete the remainder of the line, starting with current cursor position</li>
		<li>* dd delete entire current line</li>
		<li>Ndd or dNd delete N lines, beginning with the current line; e.g., 5dd deletes 5 lines</li>
		<li>yy copy (yank, cut) the current line into the buffer</li>
		<li>Nyy or yNy copy (yank, cut) the next N lines, including the current line, into the buffer</li>
		<li>p put (paste) the line(s) in the buffer into the text after the current line</li>
	</ul>

	<p>
		The ENV Command is a shell command for Linux, Unix, and Unix-like operating systems. It can be
		used to print a list of the current environment variables, or to run another program in a
		custom environment without modifying the current one. An environment variable is a named object that contains data used by one or more
		applications.
	</p>

	<h3>The Cathedral and the Bazaar</h3>

	<p>
		"The Cathedral and the Bazaar" is an essay written Eric S. Raymond about methods of software engineering.
		The essay lists several different methods that help in developing a software project. Below are some of the key points from the essay:
	</p>
	<ul>
		<li>
			Developing Something Interesting: Every good work of software starts by scratching a developer's personal itch. 
			Good programmers know what to write. 
			Great ones know what to rewrite (and reuse).
			To solve an interesting problem, start by finding a problem that is interesting to you.
		</li>
		<li>
			Get Feedback: Release early and often getting customer feedback.
			Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.
			Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging.
			If you treat your beta-testers as if they're your most valuable resource, they will respond by becoming your most valuable resource.
			Often, the most striking and innovative solutions come from realizing that your concept of the problem was wrong.
		</li>
		<li>
			Smart Data Structures and Dumb Code Works a lot Better than the Other Way Around: 
			Good programmers know what to write. Great ones know what to rewrite (and reuse).
			If you have the right attitude, interesting problems will find you.
			Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging.
			Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone.
			Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away.''
		</li>
	</ul>

	<img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Cathedral-and-the-Bazaar-book-cover.jpg" alt="CathedralBazaar Book Cover">

	<h3>What are Shell Scripts</h3>
	<p>
		A shell script is a file containing a series of commands. 
		The shell reads this file and carries out the commands as though they have been entered directly on the
		command line.
		The shell is somewhat unique, in that it is both a powerful command line interface to the system and a scripting language interpreter. 
		Most of the things that can be done on the command line can be done in scripts, and most of the things that can be done in scripts can be done on the command line.
	</p>

	<h3>What is a Package Manager</h3>
	<p>
		A collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.
		A package manager deals with packages, distributions of software and data in archive files. 
		Packages contain metadata, such as the software's name, description of its purpose, version number, vendor, checksum, and a list of dependencies necessary for the software to run properly.
	</p>

	<h3>What is a Software Repository</h3>
	<p>
		Repositories store container images which represent executable packages containing everything required to run a discrete application including the code, system tools, system libraries, and the runtime and settings of the application.
	</p>


	</div>
</div>