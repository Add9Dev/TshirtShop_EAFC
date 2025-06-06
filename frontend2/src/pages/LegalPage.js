import React from "react";

// This page is for displaying legal information, such as terms of service, privacy policy, etc.
function LegalPage() {
    return (
        <div style={{padding: "20px", maxWidth: "800px", margin: "0 auto", color: "white"}}>
            <h1>Mentions Légales</h1>
            <h1>RGPD</h1>
            <p>Nous nous engageons à protéger vos données personnelles conformément au Règlement Général sur la
                Protection des Données (RGPD).</p>
            <p>Pour ce faire, aucune donnée n'est stockée </p>
            <h1>Conditions Générales de Vente (CGV) - TSHOP</h1>
            <hr/>

            <h2>Article 1 : Préambule</h2>
            <p>Les présentes Conditions Générales de Vente (ci-après "CGV") régissent les ventes de produits réalisées
                via le site internet <strong>TSHOP</strong> (ci-après le "Site") entre la société <strong>E-COMMERCE
                    SOLUTIONS SPRL</strong>, au capital de <strong>15.000 euros</strong>, immatriculée au Registre des
                Personnes Morales de <strong>Bruxelles</strong> sous le numéro <strong>0876.543.210</strong>, dont le
                siège social est situé à <strong>Rue du Commerce 42, 1000 Bruxelles, Belgique</strong> (ci-après le
                "Vendeur") et toute personne physique ou morale (ci-après l'"Acheteur") souhaitant effectuer un achat
                sur le Site.</p>
            <p>Toute commande passée sur le Site implique l'acceptation sans réserve des présentes CGV par
                l'Acheteur.</p>

            <hr/>
            <h2>Article 2 : Produits</h2>
            <p>Les produits proposés à la vente sont ceux présentés sur le Site, dans la limite des stocks disponibles.
                Le Vendeur se réserve le droit de modifier à tout moment l'assortiment de produits. Les photographies et
                descriptions des produits sont les plus fidèles possible mais ne peuvent assurer une similitude parfaite
                avec le produit offert, notamment en ce qui concerne les couleurs.</p>

            <hr/>
            <h2>Article 3 : Prix</h2>
            <p>Les prix des produits sont indiqués en euros (€) toutes taxes comprises (TTC), hors frais de livraison.
                Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les produits seront facturés sur la
                base des tarifs en vigueur au moment de la validation de la commande par l'Acheteur. Les frais de
                livraison sont indiqués à l'Acheteur avant la validation finale de la commande.</p>

            <hr/>
            <h2>Article 4 : Commandes</h2>
            <p>L'Acheteur qui souhaite acheter un produit doit suivre le processus de commande en ligne :</p>
            <ol>
                <li><strong>Sélection des produits :</strong> L'Acheteur ajoute les produits qu'il souhaite acheter à
                    son panier.
                </li>
                <li><strong>Validation du panier :</strong> L'Acheteur vérifie le contenu de son panier et le valide.
                </li>
                <li><strong>Identification ou création de compte :</strong> L'Acheteur s'identifie s'il est déjà client
                    ou crée un compte s'il est nouveau client en fournissant les informations requises (nom, prénom,
                    adresse de livraison, adresse e-mail, etc.).
                </li>
                <li><strong>Choix du mode de livraison :</strong> L'Acheteur choisit son mode de livraison parmi les
                    options proposées.
                </li>
                <li><strong>Choix du mode de paiement :</strong> L'Acheteur choisit son mode de paiement.</li>
                <li><strong>Récapitulatif de la commande :</strong> Un récapitulatif de la commande incluant les
                    produits, les prix, les frais de livraison et le montant total est affiché. L'Acheteur a la
                    possibilité de vérifier les détails et de corriger d'éventuelles erreurs.
                </li>
                <li><strong>Confirmation de la commande :</strong> L'Acheteur confirme la commande, ce qui implique son
                    acceptation pleine et entière des présentes CGV. La confirmation de la commande constitue une
                    signature électronique qui a, entre les parties, la même valeur qu'une signature manuscrite.
                </li>
            </ol>
            <p>Le Vendeur confirmera la commande par courrier électronique à l'adresse fournie par l'Acheteur,
                récapitulant les détails de la commande.</p>

            <hr/>
            <h2>Article 5 : Modalités de Paiement</h2>
            <p>Le prix est exigible à la commande. Le paiement s'effectue en ligne par <strong>carte bancaire (Visa,
                MasterCard, Bancontact)</strong> et <strong>PayPal</strong>. Les transactions sont sécurisées
                par <strong>Stripe</strong>. Le Vendeur n'a pas accès aux données de paiement de l'Acheteur.</p>

            <hr/>
            <h2>Article 6 : Livraison</h2>
            <p>Les livraisons sont effectuées à l'adresse indiquée par l'Acheteur lors de la commande, qui doit être
                l'adresse de résidence de l'Acheteur ou de toute autre personne physique de son choix. Les délais de
                livraison sont donnés à titre indicatif et peuvent varier en fonction de la destination et du mode de
                livraison choisi. Pour la Belgique, le délai moyen est de <strong>2 à 5 jours ouvrables</strong>.</p>
            <p>En cas de retard de livraison, l'Acheteur est invité à contacter le Vendeur. Si le dépassement du délai
                excède <strong>7 jours ouvrables</strong> et n'est pas dû à un cas de force majeure, l'Acheteur pourra
                annuler sa commande et demander le remboursement.</p>
            <p>L'Acheteur est tenu de vérifier l'état des produits livrés dès réception. En cas de dommage ou de produit
                manquant, l'Acheteur devra formuler des réserves précises et motivées sur le bon de livraison et en
                informer le Vendeur dans un délai de <strong>48 heures</strong> ouvrées.</p>

            <hr/>
            <h2>Article 7 : Droit de Rétractation</h2>
            <p>Conformément aux dispositions légales en vigueur (Code de Droit Économique belge), l'Acheteur dispose
                d'un délai de <strong>quatorze (14) jours</strong> à compter de la réception des produits pour exercer
                son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités, à l'exception des
                frais de retour.</p>
            <p>Pour exercer ce droit, l'Acheteur doit notifier sa décision au Vendeur par une déclaration dénuée
                d'ambiguïté (par exemple, lettre envoyée par la poste, fax ou courrier électronique) à l'adresse
                suivante : <strong>service.client@tshop.be</strong>. Un formulaire de rétractation type est
                disponible <a href="[Lien vers le formulaire type de rétractation si vous en fournissez un, à insérer]"
                              target="_blank">ici</a>.</p>
            <p>Les produits doivent être retournés dans leur état d'origine, complets et non utilisés, dans leur
                emballage d'origine. Les frais de retour sont à la charge de l'Acheteur. Le remboursement interviendra
                dans un délai de <strong>quatorze (14) jours</strong> à compter de la réception des produits retournés
                par le Vendeur.</p>
            <p><strong>Exceptions au droit de rétractation :</strong> Conformément à l'article VI.53 du Code de Droit
                Économique, le droit de rétractation ne peut être exercé pour certains biens, tels que :</p>
            <ul>
                <li>Les biens confectionnés selon les spécifications du consommateur ou nettement personnalisés.</li>
                <li>Les biens qui ont été descellés par le consommateur après la livraison et qui ne peuvent être
                    renvoyés pour des raisons d'hygiène ou de protection de la santé.
                </li>
                <li>Les enregistrements audio ou vidéo ou les logiciels informatiques lorsqu'ils ont été descellés par
                    le consommateur après la livraison.
                </li>
                <li>Les biens qui, après avoir été livrés, et de par leur nature, sont mélangés de manière indissociable
                    avec d'autres articles.
                </li>
            </ul>

            <hr/>
            <h2>Article 8 : Garanties</h2>
            <p>Tous les produits vendus par le Vendeur bénéficient de la garantie légale de conformité (articles 1649bis
                et suivants du Code Civil belge) et de la garantie des vices cachés (articles 1641 et suivants du Code
                Civil belge).</p>
            <ul>
                <li><strong>Garantie légale de conformité :</strong> Le consommateur dispose d'un délai de <strong>deux
                    ans</strong> à compter de la délivrance du bien pour agir. Il peut choisir entre la réparation ou le
                    remplacement du bien, sous réserve des conditions de coût prévues par le Code Civil. Il est dispensé
                    de prouver l'existence du défaut de conformité du bien durant les six mois suivant la délivrance du
                    bien. Ce délai est porté à deux ans pour les biens achetés à partir du 1er janvier 2022.
                </li>
                <li><strong>Garantie des vices cachés :</strong> L'Acheteur peut décider de mettre en œuvre la garantie
                    contre les défauts cachés de la chose vendue au sens de l'article 1641 du Code Civil et, dans cette
                    hypothèse, il peut choisir entre la résolution de la vente ou une réduction du prix de vente
                    conformément à l'article 1644 du Code Civil.
                </li>
            </ul>
            <p>Pour toute demande au titre des garanties, l'Acheteur doit contacter le service client du Vendeur aux
                coordonnées indiquées à l'Article 11.</p>

            <hr/>
            <h2>Article 9 : Responsabilité</h2>
            <p>La responsabilité du Vendeur ne pourra être engagée pour un dommage résultant de l'utilisation du réseau
                Internet tel que perte de données, intrusion, virus, rupture du service, ou autres problèmes
                involontaires.</p>
            <p>La responsabilité du Vendeur ne saurait être engagée pour tous les inconvénients ou dommages inhérents à
                l'utilisation du réseau Internet, notamment une rupture de service, une intrusion extérieure ou la
                présence de virus informatiques.</p>

            <hr/>
            <h2>Article 10 : Données Personnelles</h2>
            <p>Les informations et données personnelles concernant l'Acheteur sont nécessaires à la gestion de sa
                commande et à la relation commerciale. Elles peuvent être transmises aux sociétés qui contribuent à ces
                relations, telles que celles chargées de l'exécution des services et commandes pour leur gestion,
                exécution, traitement et paiement. Ces informations et données sont également conservées à des fins de
                sécurité, afin de respecter les obligations légales et réglementaires.</p>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi belge relative à la
                protection des personnes physiques à l'égard des traitements de données à caractère personnel,
                l'Acheteur dispose d'un droit d'accès, de rectification, de suppression et d'opposition relatif à ses
                données personnelles en contactant le Vendeur à l'adresse suivante : <strong>privacy@tshop.be</strong>.
                Pour plus d'informations, veuillez consulter notre <a
                    href="[Lien vers votre Politique de Confidentialité, à insérer]" target="_blank">Politique de
                    Confidentialité</a>.</p>

            <hr/>
            <h2>Article 11 : Service Client</h2>
            <p>Pour toute question ou information, le service client du Vendeur est joignable :</p>
            <ul>
                <li>Par e-mail à l'adresse : <strong>contact@tshop.be</strong></li>
                <li>Par téléphone au : <strong>+32 (0)2 123 45 67</strong> (prix d'un appel local)</li>
                <li>Par courrier à l'adresse : <strong>Service Client TSHOP, Rue du Commerce 42, 1000 Bruxelles,
                    Belgique</strong></li>
            </ul>

            <hr/>
            <h2>Article 12 : Propriété Intellectuelle</h2>
            <p>Tous les éléments du Site (textes, photographies, illustrations, logos, marques, etc.) sont la propriété
                exclusive du Vendeur et/ou de ses partenaires et sont protégés par le droit d'auteur, le droit des
                marques et le droit des bases de données. Toute reproduction, représentation, adaptation ou exploitation
                de ces éléments, totale ou partielle, sans l'autorisation expresse et écrite du Vendeur est strictement
                interdite et constituerait une contrefaçon sanctionnée par le Code de Droit Économique et le Code de la
                Propriété Intellectuelle.</p>

            <hr/>
            <h2>Article 13 : Droit Applicable et Litiges</h2>
            <p>Les présentes CGV sont soumises à la <strong>loi belge</strong>.</p>
            <p>En cas de litige, l'Acheteur et le Vendeur s'efforceront de le résoudre à l'amiable. À défaut d'accord
                amiable, l'Acheteur a la possibilité de recourir à un médiateur de la consommation. Conformément à
                l'article L. 612-1 du Code de la consommation, vous pouvez recourir gratuitement au service de médiation
                du Service de Médiation pour le Consommateur (Boulevard du Roi Albert II 8 boîte 1, 1000 Bruxelles ;
                contact@mediationconsommateur.be ; <a href="https://www.mediationconsommateur.be"
                                                      target="_blank">www.mediationconsommateur.be</a>). Vous pouvez
                également utiliser la plateforme européenne de résolution des litiges en ligne (RLL) : <a
                    href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a>.
            </p>
            <p>À défaut de résolution amiable, les tribunaux de <strong>Bruxelles</strong> seront compétents pour
                connaître de tout litige relatif aux présentes CGV.</p>

            <hr/>
        </div>

    );
}

export default LegalPage;
