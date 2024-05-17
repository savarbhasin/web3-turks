import z from 'zod';

export const createTaskInput = z.object({
    title: z.string().optional(),
    signature: z.string(),
    options: z.array(z.object({
        imageUrl: z.string()
    }))
});
export const submissionInput = z.object({
    optionId:z.number(),
    taskId:z.number()
})