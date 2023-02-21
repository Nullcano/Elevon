<script>
  import { sections } from '$lib/api/sections'
  let here = sections[4]
</script>

<svelte:head>
	<title>{here.title} - Elevon</title>
	<meta property="og:title" content="{here.title} - Elevon" />
	<meta property="og:site_name" content="Elevon" />
	<meta property="og:url" content="https://elevon.dev/{here.slug}" />
	<meta property="og:description" content="{here.shortDescription}" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="grid-2">
	<div class="intro">
		<h1>{here.title}</h1>
		<p>{here.description}</p>  
	</div>
</div>

<div class="my6">
  <h2>Roadmap</h2>
  <div class="my4 w8">
    <h3 class="my2">Propaganda <span class="spacer"></span><small class="px2">Coming</small></h3>
    <p>Propaganda is a demo magazine application that serves as a proof of concept for the Elevon Design System. The objective of this application is to showcase the design system's potential in creating visually appealing, interactive and user-friendly interfaces for magazine-style applications. It aims to highlight the system's ability to deliver a seamless and immersive reading experience by demonstrating its robust and versatile set of design guidelines and components. Through the Propaganda demo, Elevon Design System aims to provide designers and developers with a practical example of how to leverage the system's capabilities to create engaging, responsive and accessible interfaces that cater to the needs of modern readers.</p>  
  </div>
  <div class="my4 w8">
    <h3 class="my2">Citizens <span class="spacer"></span><small class="px2">Coming</small></h3>
    <p>Citizens is a social media demo application designed to demonstrate the capabilities and potential of the Elevon Design System in creating a modern and engaging user interface for social media platforms. The objective of this demo is to showcase how the Elevon Design System can be used to create a consistent, intuitive and user-friendly interface for social media applications. Citizens aims to highlight the system's robust design guidelines and components that can enable developers and designers to create responsive, accessible, and visually appealing interfaces that cater to the needs of modern users. Through this demo, Elevon Design System aims to provide a practical example of how its design system can elevate the user experience in social media applications and inspire designers and developers to leverage its capabilities for their projects.</p>
  </div>
  <div class="my4 w8">
    <h3 class="my2">Operator <span class="spacer"></span><small class="px2">Coming</small></h3>
    <p>Operator is a demo administration dashboard application designed to showcase the capabilities and power of the Elevon Design System in creating efficient and user-friendly management experiences for businesses. The objective of this demo is to demonstrate how the Elevon Design System can be leveraged to create a modern, visually appealing, and accessible interface for administration dashboard applications. Through Operator, the Elevon Design System aims to highlight its versatile and robust design guidelines and components that can enable designers and developers to create responsive and customizable interfaces that can help businesses manage their data and processes effectively. This demo also serves as a practical example of how to implement the design system in real-world scenarios, providing designers and developers with inspiration and a starting point to build their administration dashboard applications.</p>
  </div>
</div>

<style>
  h3 {
    display: flex;
    align-items: flex-start;
  }
  small {
    font-size: 1rem;
    background: white;
    color: black;
    border-radius: 64rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  .spacer {
    flex: 1;
    place-self: strech;
  }
</style>