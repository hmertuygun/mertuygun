import { createBucketClient } from '@cosmicjs/sdk'

// Yes, this is a public read-only key. Please don't abuse it.
const cosmic = createBucketClient({
  bucketSlug: "mert-uygun-uygun",
  readKey: "TryWZwvOOAISgJpbUH7jcaESXVPpY1rPuWegCRBjZspSFBByd4",
});

export default cosmic;
