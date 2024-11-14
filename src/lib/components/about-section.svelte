<script>
  import SectionTitle from "$lib/components/items/section-title.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowUpRight } from "lucide-svelte";
</script>

<section class="flex flex-col gap-2 md:gap-8">
  <SectionTitle title={"about us"} />
  <div
    class="flex md:flex-row-reverse flex-col-reverse justify-center items-center gap-4 md:gap-6 lg:gap-16 mx-auto max-w-6xl"
  >
    <div
      class="flex flex-col justify-center items-center gap-2 md:gap-8 md:w-1/2"
    >
      <p class="text-2xl text-center text-muted-foreground lg:text-5xl">
        brix vision is a full service photography and video production studio
      </p>
      <Button>
        More about us
        <ArrowUpRight class="ms-2 size-6" />
      </Button>
    </div>
    <div class="flex justify-center items-center px-1 md:w-1/2">
      <img
        src={"https://utfs.io/f/8uPOhORkQcG5wKKXq4ky4WTOFAsUc6vSgN9QimGEeV0x3Hyz"}
        alt="about us"
        class="rounded w-full h-fit aspect-vid obaspect-video"
      />
    </div>
  </div>
</section>
