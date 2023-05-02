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
		<h1>Week 3 |</h1>
		<h2>Introduction to Ubuntu and Commands</h2>
	</div>
	<div class=content>
	<p>
        Week 3 discusses the linux based operating system Ubuntu along with the many command line functions that come along with it.
    </p>

	<h3>Exploring Ubuntu</h3>
	<p>
		Ubuntu is a Linux distribution derived from Debian. 
		File organization in Ubuntu follows a hierarchial tree structure where files represent "leaves" along a path.
	</p>
	<p>There are two types of pathes:</p>
	<ul>
		<li>Absolute Paths: Its name starts with the character / (identifying the root directory, which
			contains all other directories and files), then every child directory that must be
			traversed to reach the element is listed, each separated by a / sign. 
		</li>
		<li>
			Relative Paths:  is one that doesn't start with /; in that case, the directory tree is
			traversed starting from a given point, which changes depending on context, called
			the current directory
		</li>
	</ul>

	<p>Types of Files in Linux</p>
	<ul>
		<li>
			General Files: It is also called ordinary files. It may be an image, video,
			program, or simple text files. These types of files can be in ASCII or Binary
			format. It is the most commonly used file in the Linux system.
		</li>
		<li>
			Directory Files: These types of files are a warehouse for other file types. It
			may be a directory file within a directory (subdirectory).
		</li>
		<li>
			Device Files: In a Windows-like operating system, devices like CD-ROM, and
			hard drives are represented as drive letters like F: G: H whereas in the Linux
			system device are represented as files. As for example, /dev/sda1, /dev/sda2
			and so on.
		</li>
	</ul>

	<p>
		The base of the Linux/Unix file system hierarchy begins at the root and everything starts with the root directory.
		These are the common top-level directories associated with the root directory:
	</p>
	<ul>
		<li>/bin – binary or executable programs.</li>
		<li>/etc – system configuration files.</li>
		<li>/home – home directory. It is the default current directory.</li>
		<li>/opt – optional or third-party software.</li>
		<li>/tmp – temporary space, typically cleared on reboot.</li>
		<li>/usr – User related programs.</li>
		<li>/var – log files.</li>
	</ul>

	<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210501124411/dir.png" alt="Linux Tree Structure">

	<h3>The Linux Command Line</h3>
	<p>
		The Linux command line is a text interface to your computer. Often referred to as the
		shell, terminal, console, prompt or various other names, it can give the appearance of
		being complex and confusing to use. During the formative years of the computer
		industry, one of the early operating systems was called Unix. It was designed to run as a
		multi-user system on mainframe computers, with users connecting to it remotely via
		individual terminals. These terminals were pretty basic by modern standards: just a
		keyboard and screen, with no power to run programs locally.
	</p>
	
	<h3>Using the Terminal</h3>
	<p>The terminal can be launched using the command "ctrl-alt-t"</p>
	<img src="https://ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com/original/2X/5/5249bad7f0bb536adceb8a9381c7366054546763.png" alt="Example Linux Terminal">

	<p>Navigation Commands</p>
	<ul>
		<li>pwd - displays current working directory</li>
		<li>cd - change directory</li>
		<li>ls - lists files in current working directory</li>
	</ul>

	<p>File Commands</p>
	<ul>
		<li>vi - used to create and edit files</li>
		<li>cat - reads contents of a file and outputs to the terminal</li>
		<li>less - used to read contents of a file one page at a time</li>
		<li>mkdir - creates a new directory</li>
		<li>rmdir - deletes empty directories</li>
		<li>rm - used to remove objects from the filesystem</li>
		<li>mv - move files or directories from one place in the file system to another</li>
	</ul>

	<h3>File Permissions</h3>
	<p>Permission Groups</p>
	<ul>
		<li>
			Owner: The Owner permissions apply only to the owner of the file or directory,
			they will not impact the actions of other users.
		</li>
		<li>
			Group: The Group permissions apply only to the group that has been assigned to
			the file or directory, they will not affect the actions of other users.
		</li>
		<li>
			All Users: The All Users permissions apply to all other users on the system, this is
			the permission group that you want to watch the most.
		</li>
	</ul>

	<p>Permission Types</p>
	<ul>
		<li>
			Read: The Read permission refers to a user’s capability to read the contents of
			the file.
		</li>
		<li>
			Write: The Write permissions refer to a user’s capability to write or modify a file
			or directory.
		</li>
		<li>
			Execute: The Execute permission affects a user’s capability to execute a file or
			view the contents of a directory.
		</li>
	</ul>

	<p>
		The permissions of files in your working directory can be viewed using the command "ls -l".
		Upon running the command, a list of files will appear with a set of nine characters proceeded by a "-".
		The First set of three characters represents the owner's permissions, the next three are for groups, and the last are for all user permissions.
		If a user has an r, w, and/or x, that user has access to read, write, and/or execute the corresponding file.
		r, w, and x each have a numerical value: r=4, w=2, and x=1. Permissions of a file can be changed by running "chmod --- filename"
		The "---" represents the three user groups.
		For example, "Chmod 777 file1.txt" gives all permissions (r + w + x = 4 + 2 + 1) to all users.
	</p>
	</div> 
</div>