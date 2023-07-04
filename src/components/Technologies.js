import { Flex, Tag, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import cosmicConfig from "@/cosmic-config";
import Link from "next/link";

const Technologies = () => {
  const [tags, setTags] = useState(null);

  async function getTags() {
    const { objects: data } = await cosmicConfig.objects
      .find({ type: "tags" })
      .props("slug,title")
      .depth(1);
    console.log(data);
    return data;
  }

  useEffect(() => {
    getTags().then((tagsData) => {
      setTags(tagsData);
    });
  }, []);

  return (
    <Flex mt={5} wrap="wrap" direction={"row"}>
      {tags &&
        tags.map((tech) => (
          <WrapItem key={tech.slug}>
            <Link href={`/articles?tag=${tech.title}`}>
              <Tag
                m={1}
                size={"md"}
                variant="solid"
                colorScheme="teal"
                cursor={"pointer"}
              >
                #{tech.title}
              </Tag>
            </Link>
          </WrapItem>
        ))}
    </Flex>
  );
};

export default Technologies;
