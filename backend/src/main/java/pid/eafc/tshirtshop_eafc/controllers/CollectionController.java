package pid.eafc.tshirtshop_eafc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pid.eafc.tshirtshop_eafc.model.Collection;
import pid.eafc.tshirtshop_eafc.repository.CollectionRepository;

import java.util.List;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    @Autowired
    private CollectionRepository collectionRepository;

    @GetMapping
    public List<Collection> getAllCollections() {
        return collectionRepository.findAll();
    }
}