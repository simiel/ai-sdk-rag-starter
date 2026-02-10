import { embedMany } from "ai";

const embeddingModel = "openai/text-embedding-ada-002";

const generateChunks = (input: string): string[] => {
  return input
    .trim()
    .split(".")
    .filter((i) => i !== "");
};

export const generateEmbeddings = async (
  input: string,
): Promise<Array<{ embedding: number[]; content: string }>> => {
  const chunks = generateChunks(input);

  const { embeddings } = await embedMany({
    values: chunks,
    model: embeddingModel,
  });

  return embeddings.map((embedding, i) => ({
    embedding,
    content: chunks[i],
  }));
};
