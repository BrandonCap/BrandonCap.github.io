<script>
  
  import Router from "svelte-spa-router";

  import Header from "./Header.svelte";
  import Error from "./lib/error.svelte";
  import Week1 from "./lib/lessons/week1.svelte";
  import Week2 from "./lib/lessons/week2.svelte";
  import Week3 from "./lib/lessons/week3.svelte";
  import Week4 from "./lib/lessons/week4.svelte";
  import Week6 from "./lib/lessons/week6.svelte";
  import Week7 from "./lib/lessons/week7.svelte";
  import Week8 from "./lib/lessons/week8.svelte";
  import Week9 from "./lib/lessons/week9.svelte";
  import Week10 from "./lib/lessons/week10.svelte";
  import Week11 from "./lib/lessons/week11.svelte";
  import Week12 from "./lib/lessons/week12.svelte";
  import Home from "./Home.svelte";
  
  let routes = {
    "/": Home,
    "/Week1": Week1,
    "/Week2": Week2,
    "/Week3": Week3,
    "/Week4": Week4,
    "/Week6": Week6,
    "/Week7": Week7,
    "/Week8": Week8,
    "/Week9": Week9,
    "/Week10": Week10,
    "/Week11": Week11,
    "/Week12": Week12,

    "*": Error
  }
  
</script>

<div class=container>
  <div class=header>
    <Header />
  </div>
  <div class=content>
    <Router {routes}/>
  </div>
</div>

<style>
  .container {
    position: relative;
    place-content: bottom;
  }
  .content {
    text-align: left;
  }
</style>