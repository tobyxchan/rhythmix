async function addToList(req, res) {
    const list = await recommendation.getList(req.user._id);
    await list.addAlbumToList(req.params.id);
    res.json(list);
}