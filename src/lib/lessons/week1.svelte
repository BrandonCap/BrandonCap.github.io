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
		<h1>Week 1 |</h1>
		<h2>UNIX</h2>
	</div>
	<div class=content>
		<p>
            Week 1 discusses the operating system UNIX, and subsequently Linux, of which we use a lot throughout the class.
        </p>
        <p>
            UNIX is widely considered the mother of modern-operating systems, and is based on what's known as "Unix Philosophy" that includes characteristics like:
        </p>
            <ul>
                <li>Usage of plain text for data storage</li>
                <li>Hierarchial file system</li>
                <li>Handling devices and some specific kinds of inter-process communication (IPC) as files</li>
                <li>Employing a huge number of software tools</li>
                <li>Multiple small, simple and modular programs which can be threaded toghether via a command-line interpreter using pipes, contrasting to use a single monolithic program which comprises of all the same functionality</li>
            </ul>
        <br>

        <h3>Unix Architecture</h3>
        <img src="https://4.bp.blogspot.com/-2sXb-d11dno/W23dxq3YvLI/AAAAAAAAGtY/-sAzxj5BYoAMPgo7y5X7g07wZMoxy2UwgCLcBGAs/s1600/unix-architecture.png" alt="Circle diagram depicting UNIX architecture">

        <p>
            Pictured above is the architecture of Unix. At the heart is the master control program, the kernel, that controls everything. The interface that communicates between the user and the kernel is the shell,
            where users type in commands. Above that are programs that are further removed from the shell, often with a User Interface to interact with as opposed to directly typing in commands.
        </p>
        <p>
            Some historic Unix operating systems are Solaris and HP-UX, and the largest distributors of UNIX systems include IBM, HP, and SUN.
        </p>
        <br>

        <h3>What is Linux?</h3>
        <p>
            Linux is a derivation of Unix, and while they are often conflated, are not the same. Linux distributions do follow the basis of Unix design, and are the best examples of Unix dervatives.
            Unix operating systems need to conform to the Single UNIX Specification (SUS), and Unix-like systems often conform to the Portable Operating System Interface (POSIX) standard.
            Currently registered UNIX systems include macOS, Solairs, and AIX, and under the POSIX standard Linux distributions could be considered Unix-like operating systems.
        </p>

        <p>
            An important distinction to make is that UNIX is an entire operating system, while Linux itself is just the kernel. 
            <b>Linux is a UNIX clone</b> written from scratch by Linus Torvalds and team, designed to act like Unix without any of the original code.
            Linux distributions are what make Linux a complete operating system, such as Ubuntu or Arch Linux.
            A standard distribution (known commonly as a distro) consists of the Linux kernel, GNU system, GNU utilities, libraries, compiler, additional software, documentation, a window system and window manager, and a desktop environment.
        </p>

        <img src="https://b2600043.smushcdn.com/2600043/wp-content/uploads/2016/07/ArticleImage-12104-1.png?lossy=0&strip=1&webp=1" alt="Diagram depicting Linux based OS Architecture">
        <br>

        <h3>History of Open Source</h3>
        <ul>
            <li>Ken Thompson and Dennis Ritchie presented the first Unix paper at the Symposium on Operating Systems Principles at Purdue University in November 1973</li>
            <li>UC Berkeley was one of the very early adopters of Unix, and began distributing Unix tools called Berkeley Software Distribution, BSD, to other universities.</li>
            <li>TCP/IP was added to BSD in 1981 then broken out separate from BSD later.</li>
            <li>BSD fought lawsuits, and finally was allowed to freely distribute code in 1994. Much of what we now know as Unix comes from BSD.</li>
            <li>IETF (Internet Engineering Task Force) – Open meetings, open standards - anyone may comment, or contribute. Standards and RFC’s are freely available for downloading from IETF.</li>
            <li>GNU’s Not Unix – Richard Stallman – Began with a compiler, now known as GCC (GNU C Compiler) part of every Linux OS.</li>
        </ul>
        <p>
            <b>Copyleft</b> is meant to be the opposite of copyright, giving everyone permission to run, copy, modify, and distribute modified versions of programs covered under copyleft licenses.
            Programs that use copylefted programs must also be free and copylefted, along with any other rules the specific license specifies.
        </p>
	</div>
</div>