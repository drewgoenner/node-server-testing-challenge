const Comics = require('./comicsModel.js');
const db = require('../data/dbConfig.js');

describe('comics model', () => {

    // reset comics to empty before each test
    beforeEach(async () => {
        await db('comics').truncate();
    })
    
    //verify running in testing environment
    it('should set test env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    //testing the adding of a comic
    describe('insert()', () => {
        it('should add a comic to the database', async () => {
            const empty = await db('comics');
            expect(empty).toHaveLength(0);

            await Comics.insert({ title: 'JL:D', issue: 1});
            const comics = await db('comics');

            expect(comics).toHaveLength(1);
            
        });

        it('should add the provided comic to the database', async () => {
            let comic = await Comics.insert({ title: 'JLD', issue: 1});
            expect(comic.title).toBe('JLD');
            expect(comic.issue).toBe(1);
    
            comic = await Comics.insert({ title: 'Swamp Thing', issue: 1});
            expect(comic.title).toBe('Swamp Thing');
            expect(comic.issue).toBe(1);
            
        });
    });

    describe('remove(id)', () => {
        it('should see comic in database', async () => {
            
            await Comics.insert({ title: 'Superman', issue: 1});
            const comics = await db('comics');
            expect(comics).toHaveLength(1);
        });

        it('should see 0 comics after delete', async () => {
            await Comics.remove({id: 1})
            const empty = await db('comics');
            expect(empty).toHaveLength(0);
        })
    })

    
})