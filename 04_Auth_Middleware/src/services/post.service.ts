import type { User } from "../../generated/prisma/browser.js";
import type { DateTimeFieldRefInput } from "../../generated/prisma/internal/prismaNamespace.js";
import { prisma }  from "../lib/prisma.js"

export class PostService {
  async create(data: { id: Int16Array; title: string; content: string; authorId: Int16Array; author: User; createdAt: DateTimeFieldRefInput;

   }) {
    const existing = await this.findById(data.id)

    if (existing) {
      const err = new Error("E-mail já cadastrado")
      err.status = 409
      throw err
    }

    if (existing) {
      const err = new Error("E-mail já cadastrado")
      err.status = 409
      throw err
    }
}

    async findAll(){
        return await prisma.post.findMany({
        orderBy: {id: "asc" },
        })
    }


    async findById(id: number){
        return await prisma.post.findUnique({
            where: {id},
        })
    }


    async findByAuthor(id: number) {
        return await prisma.post.findMany({})
    }
}

