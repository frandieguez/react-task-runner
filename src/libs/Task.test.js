import Task from './Task';

test('Create a task valid', () => {
  let task = new Task('title');

  expect(task.name).toBe('title');
  expect(task.status).toBe('PENDING');
  expect(task.key).toBeGreaterThan(0);
  expect(task.ttl).toBeGreaterThan(0);
});

test('Create an invalid task', () => {
  expect(() => {
    new Task('')
  }).toThrow(Error);
});

test('Create an invalid task', async () => {
  let task = new Task('title');

  // To speed up tests we will overwrite the ttl property.
  task.ttl = 0;

  let result = await task.run();

  expect(['DONE', 'FAILED']).toContain(result);
});
