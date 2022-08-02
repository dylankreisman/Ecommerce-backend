# E-commerce Back End Starter Code

## Description
This project entailed configuring a back-end e-commerce framework so that data could be retrived through categories, products, and/or tags. For these through facets, the application could:
- retrieve all data through a get request
- retrieve individual data
- add new data
- update data
- delete data

## Technologies Used
- Express.JS
- Sequelize/MySQL
- Insomnia

## Walkthrough
[Video](https://youtu.be/K_O8KwYLvAw)

## Code Snippet
This snippet demonstrates retrieving a singular product's data through a category search. I used the async method to create a promise and incorporated the product's model date upon the retrieval. The code explains locating the product through it's model id, and if there were errors, I would be notified. 
```
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    if(!categoryData){
      res.status(404).json({message: 'No match found'})
    };
    res.status(200).json(categoryData)
  } catch (err){
    res.status(500).json(err)
  }
});
```
## Contact Links
- [GitHub](https://github.com/dylankreisman/Ecommerce-backend)
- [LinkedIn](https://www.linkedin.com/in/dylan-kreisman-3752b1160/)