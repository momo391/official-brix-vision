<script>
  import { Button } from "$lib/components/ui/button";
</script>

<section>
  <img
    src={"https://utfs.io/f/8uPOhORkQcG5BRCj5hKY94aFJTsXrUbwIq1ZMm2Vxg0puBPn"}
    alt="background"
    class="w-screen h-96 sm:h-screen object-cover"
  />
  <div
    class="top-0 absolute inset-x-0 flex flex-col justify-center items-center gap-4 bg-black/50 h-96 sm:h-screen"
  >
    <div class="flex flex-col justify-center items-center gap-2 w-full">
      <p class="font-medium font-sans text-muted-foreground text-sm lowercase">
        your vision, perfectly captured
      </p>
      <p
        class="font-mono font-semibold text-4xl text-center sm:text-6xl md:text-7xl lg:text-9xl capitalize leading-none tracking-tight"
      >
        brix vision
      </p>
    </div>
    <div
      class="flex sm:flex-row flex-col justify-center items-center gap-4 sm:w-screen max-w-md *:capitalize"
    >
      <Button variant={"default"} size={"lg"}>get in touch</Button>
    </div>
  </div>
</section>
