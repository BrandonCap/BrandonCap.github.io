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
		<h1>Week 7 |</h1>
		<h2>Version Control</h2>
	</div>
	<div class=content>


<h3>About Version Control</h3>
<p>
What is “version control”, and why should you care? Version control is a system that
records changes to a file or set of files over time so that you can recall specific versions
later. For the examples in this book, you will use software source code as the files being
version controlled, though in reality you can do this with nearly any type of file on a
computer. <br>
If you are a graphic or web designer and want to keep every version of an image or
layout (which you would most certainly want to), a Version Control System (VCS) is a
very wise thing to use. It allows you to revert selected files back to a previous state,
revert the entire project back to a previous state, compare changes over time, see who
last modified something that might be causing a problem, who introduced an issue and
when, and more. Using a VCS also generally means that if you screw things up or lose
files, you can easily recover. In addition, you get all this for very little overhead. <br>
A component of <u>software configuration management</u>, <b>version control</b>, also known
as <b>revision control</b> or <b>source control</b>,[1] is the management of changes to
documents, <u>computer programs</u>, large web sites, and other collections of information.
Changes are usually identified by a number or letter code, termed the "revision
number", "revision level", or simply "revision". For example, an initial set of files is
"revision 1". When the first change is made, the resulting set is "revision 2", and so on.
Each revision is associated with a <u>timestamp</u> and the person making the change.
Revisions can be compared, restored, and with some types of files, merged.
The need for a logical way to organize and control revisions has existed for almost as
long as <u>writing</u> has existed, but revision control became much more important, and
complicated when the era of computing began. The numbering of <u>book editions</u> and
of <u>specification revisions</u> are examples that date back to the print-only era. Today, the
most capable (as well as complex) revision control systems are those used in <u>software development</u>, 
where a team of people may change the same files. <br>
<b>Version control systems (VCS)</b> most commonly run as stand-alone applications, but
revision control is also embedded in various types of software such as <u>word processors</u> 
and <u>spreadsheets</u>, collaborative <u>web docs</u>[2] and in various <u>content
management systems</u>, e.g., Wikipedia's <u>page history</u>. Revision control allows for the
ability to revert a document to a previous revision, which is critical for allowing editors to
track each other's edits, correct mistakes, and defend against vandalism
and <u>spamming</u>. -https://en.wikipedia.org/wiki/Version_control <br>
In computer <u>software engineering</u>, revision control is any kind of practice that tracks 
and provides control over changes to source code. Software developers sometimes use
revision control software to maintain documentation and configuration files as well as
source code. <br>
As teams design, develop and deploy software, it is common for multiple versions of the
same software to be deployed in different sites and for the software's developers to be
working simultaneously on updates. Bugs or features of the software are often only
present in certain versions (because of the fixing of some problems and the introduction
of others as the program develops). <br>
Therefore, for the purposes of locating and fixing bugs, it is vitally important to be able
to retrieve and run different versions of the software to determine in which version(s) the
problem occurs. It may also be necessary to develop two versions of the software
concurrently: for instance, where one version has bugs fixed, but no new features
(branch), while the other version is where new features are worked on (trunk).
At the simplest level, developers could simply retain multiple copies of the different
versions of the program, and label them appropriately. This simple approach has been
used in many large software projects. While this method can work, it is inefficient as
many near-identical copies of the program have to be maintained. This requires a lot of
self-discipline on the part of developers and often leads to mistakes. Since the code
base is the same, it also requires granting read-write-execute permission to a set of
developers, and this adds the pressure of someone managing permissions so that the
code base is not compromised, which adds more complexity. Consequently, systems to
automate some or all of the revision control process have been developed. This
ensures that the majority of management of version control steps is hidden behind the
scenes. <br>
Moreover, in software development, legal and business practice and other
environments, it has become increasingly common for a single document or snippet of
code to be edited by a team, the members of which may be geographically dispersed
and may pursue different and even contrary interests. Sophisticated revision control that
tracks and accounts for ownership of changes to documents and code may be
extremely helpful or even indispensable in such situations. <br>
Revision control may also track changes to configuration files, such as those typically
stored in /etc or /usr/local/etc on Unix systems. This gives system administrators
another way to easily track changes made and a way to roll back to earlier versions
should the need arise. <br> 
Revision control manages changes to a set of data over time. These changes can be
structured in various ways. <br>
Often the data is thought of as a collection of many individual items, such as files or
documents, and changes to individual files are tracked. This accords with intuitions
about separate files but causes problems when identity changes, such as during
renaming, splitting or merging of files. Accordingly, some systems, such as git, instead
consider changes to the data as a whole, which is less intuitive for simple changes but
simplifies more complex changes. <br>
When data that is under revision control is modified, after being retrieved by checking
out, this is not in general immediately reflected in the revision control system (in
the repository), but must instead be checked in or committed. A copy outside revision
control is known as a "working copy". As a simple example, when editing a computer
file, the data stored in memory by the editing program is the working copy, which is
committed by saving. Concretely, one may print out a document, edit it by hand, and
only later manually input the changes into a computer and save it. For source code
control, the working copy is instead a copy of all files in a particular revision, generally
stored locally on the developer's computer;[note 1] in this case saving the file only changes
the working copy, and checking into the repository is a separate step. <br>
If multiple people are working on a single data set or document, they are implicitly
creating branches of the data (in their working copies), and thus issues of merging
arise, as discussed below. For simple collaborative document editing, this can be
prevented by using file locking or simply avoiding working on the same document that
someone else is working on. <br>
Revision control systems are often centralized, with a single authoritative data store,
the repository, and check-outs and check-ins done with reference to this central
repository. Alternatively, in distributed revision control, no single repository is
authoritative, and data can be checked out and checked into any repository. When
checking into a different repository, this is interpreted as a merge or patch. <br>
</p><br>

<h3>Source-management models</h3>
<p>
Traditional revision control systems use a centralized model where all the revision
control functions take place on a shared server. If two developers try to change the
same file at the same time, without some method of managing access the developers
may end up overwriting each other's work. Centralized revision control systems solve
this problem in one of two different "source management models": file locking and
version merging. </p><br>

<h3>File locking</h3>
<p>
The simplest method of preventing "concurrent access" problems involves locking
files so that only one developer at a time has write access to the central "repository"
copies of those files. Once one developer "checks out" a file, others can read that file,
but no one else may change that file until that developer "checks in" the updated
version (or cancels the checkout). <br>
File locking has both merits and drawbacks. It can provide some protection against
difficult merge conflicts when a user is making radical changes to many sections of a
large file (or group of files). However, if the files are left exclusively locked for too long,
other developers may be tempted to bypass the revision control software and change
the files locally, leading to more serious problems.
</p><br>

<h3>Version merging</h3>
Main article: Merge (revision control)
Most version control systems allow multiple developers to edit the same file at the same
time. The first developer to "check in" changes to the central repository always
succeeds. The system may provide facilities to merge further changes into the central
repository, and preserve the changes from the first developer when other developers
check in. <br>
Merging two files can be a very delicate operation, and usually possible only if the data
structure is simple, as in text files. The result of a merge of two image files might not
result in an image file at all. The second developer checking in the code will need to
take care with the merge, to make sure that the changes are compatible and that the
merge operation does not introduce its own logic errors within the files. These problems
limit the availability of automatic or semi-automatic merge operations mainly to simple
text-based documents, unless a specific merge plugin is available for the file types.
The concept of a reserved edit can provide an optional means to explicitly lock a file for
exclusive write access, even when a merging capability exists.

<h2>Version Control Best Practices</h2>

<h3>Commit Related Changes</h3>
<p>
A commit should be a wrapper for related changes. For example, fixing two different
bugs should produce two separate commits. Small commits make it easier for other
team members to understand the changes and roll them back if something went wrong.
With tools like the staging area and the ability to stage only parts of a file, Git makes it
easy to create very granular commits.
</p><br>

<h3>Commit Often</h3>
<p>
Committing often keeps your commits small and, again, helps you commit only related
changes. Moreover, it allows you to share your code more frequently with others. That
way it’s easier for everyone to integrate changes regularly and avoid having merge
conflicts. Having few large commits and sharing them rarely, in contrast, makes it hard
both to solve conflicts and to comprehend what happened.
</p><br>

<h3>Don’t Commit Half-Done Work</h3>
<p>
You should only commit code when it’s completed. This doesn’t mean you have to
complete a whole, large feature before committing. Quite the contrary: split the feature’s
implementation into logical chunks and remember to commit early and often. But don’t
commit just to have something in the repository before leaving the office at the end of
the day. If you’re tempted to commit just because you need a clean working copy (to
check out a branch, pull in changes, etc.) consider using Git’s “Stash” feature instead.
</p><br>

<h3>Test Before You Commit</h3>
<p>
Resist the temptation to commit something that you “think” is completed. Test it
thoroughly to make sure it really is completed and has no side effects (as far as one can
tell). While committing half-baked things in your local repository only requires you to
forgive yourself, having your code tested is even more important when it comes to
pushing / sharing your code with others.
</p><br>

<h3>Write Good Commit Messages</h3>
<p>
Begin your message with a short summary of your changes (up to 50 characters as a
guideline). Separate it from the following body by including a blank line. The body of
your message should provide detailed answers to the following questions: What was the
motivation for the change? How does it differ from the previous implementation? Use
the imperative, present tense („change“, not „changed“ or „changes“) to be consistent
with generated messages from commands like git merge.
</p><br>

<h3>Version Control is not a Backup System</h3>
<p>
Having your files backed up on a remote server is a nice side effect of having a version
control system. But you should not use your VCS like it was a backup system. When
doing version control, you should pay attention to committing semantically (see “related
changes”) – you shouldn’t just cram in files.
</p><br>

<h3>Use Branches</h3>
<p>
Branching is one of Git’s most powerful features – and this is not by accident: quick and
easy branching was a central requirement from day one. Branches are the perfect tool
to help you avoid mixing up different lines of development. You should use branches
extensively in your development workflows: for new features, bug fixes, experiments,
ideas... 
</p><br>

<h3>Agree on a Workflow</h3>
<p>
Git lets you pick from a lot of different workflows: long-running branches, topic
branches, merge or rebase, git-flow... Which one you choose depends on a couple of
factors: your project, your overall development and deployment workflows and (maybe
most importantly) on your and your teammates’ personal preferences. However you
choose to work, just make sure to agree on a common workflow that everyone follows.
</p>

<h3>What is Git?</h3>
<p>
Git is a distributed, open-source version control system. It enables developers and data
scientists to track code, merge changes and revert to older versions - AWS. It allows you
to sync changes with a remote server. Due to its flexibility and popularity, Git has
become an industry standard as it supports almost all development environments,
command-line tools, and operating systems
</p><br>

<h3>How does Git work?</h3>
<p>
Git stores your files and their development history in a local repository. Whenever you save
changes you have made, Git creates a commit. A commit is a snapshot of current files. These
commits are linked with each other, forming a development history graph, as shown below.
It allows us to revert back to the previous commit, compare changes, and view the progress
of the development project - Azure DevOps. The commits are identified by a unique hash
which is used to compare and revert the changes made.
</p><br>

<img src="https://user-images.githubusercontent.com/60375020/235407177-ea4b60e9-c124-4e8f-a68f-71ed81e5084c.png" alt="A graph of the development history">

<br>
<h3>Branches</h3>
<p>
The branches are copies of the source code that works parallel to the main version. To save
the changes made, merge the branch into the main version. This feature promotes conflict-
free teamwork. Each developer has his/her task, and by using branches, they can work on
the new feature without the interference of other teammates. Once the task is finished, you
can merge new features with the main version (master branch).
</p><br>
<img src="https://user-images.githubusercontent.com/60375020/235407651-885e3122-9b81-48c3-8393-a407cd6d1184.png" alt="Adding new feature to repository">

<h3>Commits</h3>
<p>
There are three states of files in Git: modified, staged, and commit. When you make changes
in a file, the changes are saved in the local directory. They are not part of the Git
development history. To create a commit, you need to first stage changed files. You can add
or remove changes in the staging area and then package these changes as a commit with a
message describing the changes.
</p><br>

<img src="https://user-images.githubusercontent.com/60375020/235407737-06bfa323-16f2-4850-8091-e09ee0a914ec.png" alt="Three states of files in Git">

<h3>What are the benefits of Git?</h3>
<ul>Track changes: It allows developers to view historical changes.
Development history makes it easy to identify and fix bugs. </ul>
<ul>IDE Integration: Due to its popularity, Git integration is available in all
	development environments, for example VSCode and JupyterLab.</ul>
<ul>Team collaboration: A developer team can view their progress, and by
	using branches, they can work individually on a task and merge changes
	with the main version. Pull requests, resolving merge conflicts, and code
	review promote team collaboration. </ul>
<ul>Distributed VSC: In a distributed system, there is no centralized file
	storage. There are multiple backups for the same project. This approach
	allows developers to work offline and commit changes.</ul>
<br>

<h3>Git for Data Science Projects</h3>
<p>
Git provides version control for scripts, metrics, data, and models. By using Git
extension git-lfs, you can store and version a large database and machine learning models.
In a typical data science project, you have a Jupyter notebook, dataset, model, metadata,
and model metrics. The metadata includes files containing meta-information about the
machine learning model, features, model parameters, and automation files. All of these are
necessary for monitoring the progress of AI applications and resolving issues.
Track data science experiments help scientists revert accidental changes, select the best
experiment based on the performance metric, and collaborate with other teammates. The
diagram below shows how changes to data or code affect the metadata and output of the
model. Tracking these changes can also help other teammates come up with a better
solution. Learn all about Git in the latest blog from Summer Worsley.
</p><br>

<img src="https://user-images.githubusercontent.com/60375020/235408078-ae0c2eb6-1c08-4e51-a752-469f69416e23.png" alt="Git for a Data Science Project">

<h3>Collaboration with GitHub</h3>
<p>
GitHub is a cloud software development platform. It is commonly used for saving files,
tracking changes, and collaborating on development projects. In recent years, GitHub has
become the most popular social platform for software development communities.
Individuals can contribute to open-source projects and bug reports, discuss new projects
and discover new tools. <br>
Data scientists and machine learning engineers are following the path of software
developers and integrating the workflow with GitHub. By doing this, they can share their
research work, allow community contribution, and collaborate with data teams. You can
find all kinds of data science and machine learning projects, guides, tutorials, and resources
on this platform. For students, the platform has become an opportunity to gain work
experience and eventually land a job in a prestigious company.
</p><br>

<h3>Portfolio</h3>
<p>
Most technical recruiters will ask for the portfolio projects or GitHub profile. This helps
them determine whether a candidate is a good fit for their company. It is highly
recommended to create a GitHub profile and update it regularly. Hiring managers are
always on the lookout for candidates that are highly experienced in software development
and contribute to open-source projects. Being able to analyze the GitHub portfolio helps
them prepare questions for technical interview sessions.
</p><br>

<img src="https://user-images.githubusercontent.com/60375020/235412777-bfdc7c81-d584-4dc0-9815-960b70e030a6.png">

GitHub enables data scientists to showcase their projects, and it can also count as work
experiences on your resume. Showcasing portfolio projects also creates opportunities to
work together, launch a startup, and research work.

<img src="https://user-images.githubusercontent.com/60375020/235412862-71a9f7e0-09a9-423a-866c-383adf37cc7d.png">

<h3>Features</h3>
GitHub also provides various other features that are as important as showcasing a
portfolio. It is necessary to learn about each feature so that you can incorporate them into
your data science projects.

<ul>Open-source: GitHub provides a complete ecosystem for open-source
projects. You can sponsor maintainers, contribute to a project, use the
open-source tool in your existing project, and promote your work.</ul>
<ul>Community Collaboration: GitHub has become a community platform
where issues, feature requests, code, and documentation contributions can
be discussed.</ul>
<ul>Explore: GitHub Explore tab helps you discover new projects, trending
tools, and developer events.</ul>
<ul>GitHub Gists: You can share the snippet of your code or embed it in a blog
or website.</ul>
<ul>GitHub CLI: It allows you to perform merge requests, review code, check
issues, and monitor progress from the command line program. </ul>
<ul>Free Storage: unlimited private and public repositories storage.</ul>
<ul>Web hosting: You can publish your portfolio site or documentation. GitHub
pages provide easy to build and deploy website experience.</ul>
<ul>Codespace: a cloud development environment integrated with your GitHub
repository.</ul>
<ul>Project: a customizable, flexible tool for planning and tracking the work on
GitHub.</ul>
<ul>Automation: GitHub Action automates development workflow such as
build, test, publish, release, and deployment.</ul>
<ul>Sponsor: You can support your favorite open-source project or developers
by paying a monthly or one-time fee. It also allows developers to use third-
party payment platforms such as ko-fi. </ul>
<br>

<h3>Basic Commands</h3>
Before we jump into managing data science projects, let's learn about the most common Git
commands that you will be using in every data science project. The basic commands
include initializing the Git repository, saving changes, checking logs, pushing the changes to
the remote server, and merging.

<ul>git init create a Git repository in a local directory.</ul>
<ul>git clone <remote-repo-address>: copy the entire repository from a
	remote server to remote directory. You can also use it to copy local
	repositories.</ul>
<ul>git add <file.txt>: add a single file or multiple files and folders to the
	staging area</ul>
<ul>git commit –m “Message”: create a snapshot of changes and save it in the
	repository</ul>
<ul>git config use to set user-specific configurations like email, username, and file format.</ul>
<ul>git status shows the list of changed files or files that have yet to be staged and committed. </ul>
<ul>git push <remote-name> <branch-name>: send local commits to remote branch of repository. </ul>
<ul>git checkout -b <branch-name>: creates a new branch and switches to a new branch.</ul>
<ul>git remote –v: view all remote repositories.</ul>
<ul>git remote add <remote-name> <host-or-remoteURL>: add remote server to local repository.</ul>
<ul>git branch –d <branch-name>: delete the branch</ul>
<ul>•	git pull merge commits to a local directory from a remote repository.</ul>
<ul>•	git merge <branch-name>: after resolving merge conflicts the command blends selected branch into the current branch.</ul>
<ul>•	git log show a detailed list of commits for the current branch.</ul>
<br>

<img src="https://user-images.githubusercontent.com/60375020/235412974-5d93863f-65f0-418d-aa9b-79e97ab604ea.png">

<br>
If you are interested in learning more commands, check out the Git cheat sheet by Gitlab. 

<h2>Getting started</h2>
In this section, we are going to use Git to track a data science project and GitHub as a remote server. We will learn how to install Git, 
create and clone a repository from GitHub, run machine learning experiments, and push changes (notebook, model, data) to GitHub using Windows PowerShell 7. 

<h3>Installing Git</h3>
Git supports all operating systems. You can install it using command-line tools or directly download and install the setup. 
<br>Linux<br>
For Debian/Ubuntu-based operating systems use `apt-get install git`, and if you are using another Linux-based system, check out the complete list of 
installing commands here.
<br>macOS<br>
If you have homebrew installed, use this command to download and install Git: `brew install git`. You can also download the binary installer and run the setup.
<br>Windows<br>
Installing Git on Windows is hassle-free. Just go to the download page, click on the specific Windows version, and download and install the setup. 
If you have a winget tool, you can install it by typing `winget install --id Git.Git -e --source winget` in PowerShell. 
After installing Git, make sure you have configured the user name and email. This information is used to sign the commits. 
<br><br>
<i>
	git config --global user.name "your-user-name" <br>
	git config --global user.email "your@email.com"
</i><br>
For more in-depth information on how to install Git, click here. 

<h3>Initializing the Project</h3>
If you have a GitHub account, click on the + button and select a new repository. After that, type the repository name and add a simple description. 
It will create an empty public repository. 

<br>
<img src="https://user-images.githubusercontent.com/60375020/235413154-b1350903-4f68-44d9-8e6d-578b92d34a7b.png">

There are many ways to clone remote repositories to the local directory, and GitHub provides a detailed guide on how to clone, add remote, and initialize a Git project.  

<img src="https://user-images.githubusercontent.com/60375020/235413237-e9d4f4eb-48b0-441b-a063-59b12655a569.png">

We can simply clone the repository by providing an HTTPS link. Make sure you are in the working directory using the command prompt or PowerShell. 

<br><br>
<i>
git clone https://github.com/kingabzpro/DataCamp-Git.git <br>

>>> Cloning into 'DataCamp-Git'...<br>
>>> warning: You appear to have cloned an empty repository.<br>

cd .\DataCamp-Git\<br>
</i><br>

OR
Create a new directory called “DataCamp-Git” and initialize Git using a simple command. After that, add a connection to the remote 
repository so that you can sync your work with GitHub.

<br><br>
<i>
	mkdir DataCamp-Git<br>
	cd .\DataCamp-Git<br>
	git init<br>
	
	>>> Initialized empty Git repository in C:/Repository/GitHub/DataCamp-Git/.git/ <br>
	
	git remote add origin https://github.com/kingabzpro/DataCamp-Git.git <br>
</i><br>

OR 
If you already have a project in a directory, just initialize Git using `git init` and add GitHub remote, as shown above. 
Simple Commit
Before we add files to our repository, make sure you are in the correct local directory. 
We will start simple and create a README file with the heading DataCamp-Git. Then, we will add it to the staging area by using `git add`. 


<br><br>
<i>
	echo "# DataCamp-Git" >> README.md<br>
	git add README.md<br>
</i><br>	

Git status shows that we are on the main branch and the `README.md` file is staged and ready to be committed.  
<br><br>
<i>
	git status<br>

>>> On branch main<br>
>>> No commits yet<br>
>>> Changes to be committed:<br>
  (use "git rm --cached <file>..." to unstage)<br>
        new file:   README.md<br>
</i><br>

To create our first commit, we will use `git commit` with a message. As we can observe, the first commit is added under the ed9c886 hash.
<br><br>
<i>
	git commit -m "first commit"<br>

>>> [main (root-commit) ed9c886] first commit<br>
>>> 1 file changed, 1 insertion(+)<br>
>>> create mode 100644 README.md<br>
</i><br>

<h3>Adding Project Files</h3>
We will use the DataCamp workspace MasterCard Stock Price with LSTM and GRU and download files. The author of the project has 
preprocessed the data and training time series data on the LSTM and GRU models. Learn more about the project by reading Recurrent Neural Network Tutorial (RNN).
To save the model file, we have added a new code cell in the project's Jupyter notebook. The new script will create a new directory 
called “model” and save both LSTM and GRU models. 

<br><br>
<i>
	!mkdir -p model<br>
	model_lstm.save('model/LSTM')<br>
	model_gru.save('model/GRU')<br>
</i><br>

As we can see, the Git repository has a data folder containing CSV files, the model folder with the model’s weight and metadata. 

<img src="https://user-images.githubusercontent.com/60375020/235413303-8eae596b-4ccf-430e-a691-6013f323eaf2.png">

We will now stage all the files. You can add any directory, file, or data after the initial command. 

<i>git add .\data .\model LSTM_GRU.ipynb RNN.png</i><br>
OR
If you want to add all files to the staging area, then use dot.
<i>git add .</i><br>

<h3>Commit and Push</h3>
We will commit all the changes with a simple message, and the output shows all the new files in create mode. <br>
<br>
<i>
	git commit -m "project files added"<br>

>>> [main aa3e19a] project files added<br>
>>>  10 files changed, 5020 insertions(+)<br>
>>>  create mode 100644 LSTM_GRU.ipynb<br>
>>>  create mode 100644 RNN.png<br>
>>>  create mode 100644 data/Mastercard_stock_history.csv<br>
>>>  create mode 100644 data/Mastercard_stock_info.csv<br>
>>>  create mode 100644 model/GRU/saved_model.pb<br>
>>>  create mode 100644 model/GRU/variables/variables.data-00000-of-00001<br>
>>>  create mode 100644 model/GRU/variables/variables.index<br>
>>>  create mode 100644 model/LSTM/saved_model.pb<br>
>>>  create mode 100644 model/LSTM/variables/variables.data-00000-of-00001<br>
create mode 100644 model/LSTM/variables/variables.index<br>
</i><br>

Syncing with GitHub remote repository requires a remote name and branch name `git push <remote-name> <branch-name>`. If you 
	have only one remote and one branch, then using `git push` will work. <br>

After `git push`, the pop-up window will ask for the credentials, just add your GitHub username or password. You can also generate 
Personal access tokens and add them instead of the password. Learn more by reading the Git Push and Pull Tutorial. <br>
<i>
	git push<br>

>>> Enumerating objects: 21, done.<br>
>>> Counting objects: 100% (21/21), done.<br>
>>> Delta compression using up to 4 threads<br>
>>> Compressing objects: 100% (19/19), done.<br>
>>> Writing objects: 100% (21/21), 1.83 MiB | 1.59 MiB/s, done.<br>
>>> Total 21 (delta 2), reused 0 (delta 0), pack-reused 0<br>
>>> remote: Resolving deltas: 100% (2/2), done.<br>
>>> To https://github.com/kingabzpro/DataCamp-Git.git <br>
>>>  * [new branch]      main -> main<br>
</i> <br>

We are going to check our GitHub repository kingabzpro/DataCamp-Git to see whether we have successfully pushed the changes 
to remote. The GitHub repository has all the files, data, and models.

<img src="https://user-images.githubusercontent.com/60375020/235413388-1fb96ac7-9896-404e-9708-53dcb6e2c280.png">

<h3>Git Branches</h3>
It is recommended to work with branches: for example, if you want to work on project documentation, create a documentation 
branch using `git checkout` or `git branch`. Make changes in the README file and when you have finalized the changes, merge the branch with the base. 
In our case, we have created and switched to a new branch called `readme`.
<i>git checkout -b readme</i><br>

Let’s edit the README file by adding a description to the project and link the RNN DataCamp workspace and tutorial. After that, 
we will stage changes and save a snapshot of changes with a message.

<i>
	git add README.md<br>
git commit -m "project description and links to blog"<br>

>>> [readme f3b8b9b] project description and links to blog<br>
>>>  1 file changed, 8 insertions(+)<br>
</i> <br>

The remote repository doesn't have a readme branch. To create a new branch and push changes, we will use “readme:readme”. 
The output of the command shows that new branches have been created and both local and remote `readme` branches are synced. <br>

<i>
	git push origin readme:readme<br>
>>> remote: Resolving deltas: 100% (1/1), completed with 1 local object. <br>
>>> remote: Create a pull request for 'readme' on GitHub by visiting:<br>
>>> remote:  https://github.com/kingabzpro/DataCamp-Git/pull/new/readme <br>
>>> remote:<br>
To https://github.com/kingabzpro/DataCamp-Git.git <br>
>>>  * [new branch]      readme -> readme <br>
</i> <br>

You can observe that we have successfully pushed the local branch to GitHub with a modified version of README.md file. 

<img src="https://user-images.githubusercontent.com/60375020/235413499-66c8cab8-16e7-4ccb-8d26-39b546755ec9.png">

<h3>Pull Request</h3>
This functionality is common for organizations. For example,  a software developer has worked on a new feature and wants 
to merge changes to the main remote branch. We will now create pull requests using GitHub GUI by clicking on the pull request 
button. After that, select the readme branch  which we want to merge with the base (main). You can type a detailed explanation of 
what features were added and click on the pull request button.

<img src="https://user-images.githubusercontent.com/60375020/235413568-a6104544-182d-49be-b92b-2fcb0be130f2.png">

The maintainer of the repository will compare your changes and merge them when they have passed all the tests. In our case, you are the maintainer, so click on the merge request to blend changes with the main branch. 

<img src="https://user-images.githubusercontent.com/60375020/235413621-f5514110-3189-4c80-b084-56089dcc7360.png">

Congratulations, we have successfully created a pull request and merged it with the main branch. You can view the changes on the main branch here. 
If you want to view all the changes within your git repository, just type `git log`, and it will show historical changes to your project. Logging changes in data science projects are important, and Git helps us track all the changes, even large datasets. 

<img src="https://user-images.githubusercontent.com/60375020/235413715-b8752ba0-c9f7-46fb-84b5-c9a44c80faa4.png">

Assignment <br>
Read ProGit pages 9-61 and 165-217 <br>
Answer the following:<br>
<ul>Why is copying updated files into a directory ineffective?</ul>
<ul>Briefly describe the difference between “Centralized” version control and “Distributed” version control?</ul>
<ul>When Git was developed, what were the goals?  Were they met?</ul>
<ul>What are the three main states in which your files may reside while using Git?</ul>
<ul>Many programs on GitHub are in need of improvement.  If you find a program you wish to work on, what are the six steps to getting the program, fixing it and submitting your changes?</ul>
	</div>
</div>
