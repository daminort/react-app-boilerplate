import faker from 'faker';

const mockToken = faker.random.uuid();

const mockUser = {
	id: faker.random.uuid(),
	name: faker.name.findName(),
	email: faker.internet.email(),
	avatar: faker.image.avatar(),
};

export {
	mockToken,
	mockUser,
};
