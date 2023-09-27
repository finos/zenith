---
title: Zenith Brain Trust Blog #001
description: Reproducability in AI Models
slug: brain-trust-ai-reproducability
tags: [ai][brain trust][governance]
image: /img/blog/brain_trust_AI_1.png
---

The first of the key topics discussed by the brain trust really focused on the complexities and challenges associated with achieving reproducibility in the context of AI models. <!--truncate-->

From a Financial Services standpoint, ensuring that your ability to recreate the results of a particular query is essential; especially in the eyes of our regulators! This problem is exceptionally complex, compounded by the complexity of models, presenting a significant barrier to full reproducibility and adoption.

## Transparency and Reproducibility Challenges

AI models, particularly deep learning models, are known for their intricate architectures and data-intensive training processes. During the discussion, it became evident that the sheer complexity of these models presents a significant barrier to full reproducibility as well as transparency into their inner workings.

One key challenge lies in the stochastic nature of AI model training. Random processes, such as weight initialization and data shuffling, introduce variability into the training process. Even slight variations in these random factors can lead to different outcomes when attempting to reproduce the model.

The conversation highlighted the critical role of software environments in reproducibility. Managing dependencies, libraries, and software versions becomes crucial when trying to replicate a model's results. Any changes in these components can result in variations in model performance. Providing consistent results in regulated domains such as ours is important given the impact misleading results can have on clients and materials produced using these models.

Furthermore, the use of hardware accelerators like GPUs adds another layer of complexity. Driver and firmware updates for these accelerators can impact model training, necessitating careful management of hardware configurations.

## Data Considerations

Data is the cornerstone of AI model training, and it presents its own set of reproducibility challenges. Datasets can evolve over time, with new data points being added or existing ones modified. Ensuring that the data used for model training remains static or adequately versioned is essential for reproducibility.

The discussion emphasized the importance of transparency in AI model development. Understanding the data sources, preprocessing steps, and hyperparameter choices is critical for others attempting to reproduce the results. The call for more comprehensive model documentation, akin to research papers, is growing louder within the AI community through mechanisms such as [data model cards](https://huggingface.co/blog/model-cards) and [model factsheets](https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/factsheets-model-inventory.html?audience=wdp&context=cpdaas)

## Model Transparency Best Practices

While full reproducibility in AI models may be elusive due to inherent complexity and randomness, there are steps organizations and researchers can take to enhance it, as illustrated in the below diagram:

![Reproducability in AI Models Steps](/img/blog/brain_trust_AI_1.png)

Let’s dive into each of these approaches in turn:

### 1. Embrace Version Control
Implement robust version control for both code and data. Track changes meticulously to ensure that others can replicate your work accurately.

### 2. Prioritize Comprehensive Documentation
Maintain detailed documentation that encompasses the model architecture, training process, data sources, and hyperparameters used. This documentation serves as a crucial guide for reproducibility.

### 3. Leverage Containerization
Utilize containerization technologies like Docker to encapsulate your software environment. Containers facilitate sharing and ensure consistent execution across different setups.

### 4. Advocate for Standardized Practices
Support and adhere to standardized practices and guidelines within the AI community. These standards promote consistency and improve the reproducibility of AI models.

### 5. Promote Transparency
Transparency is key to reproducibility. Share not only the final model but also the knowledge and best practices associated with it. Document the entire pipeline, from data collection to model deployment.

While achieving full reproducibility in AI models may remain a challenge due to the inherent complexity and randomness, these recommendations provide a solid foundation for enhancing the replicability of AI research and applications.

## Licensing & Legal Considerations

The realm of AI is rapidly evolving, and with it come a host of licensing and legal considerations. A recent discussion with our Brain Trust delved into the complex (and undefined) landscape of AI model usage, copyright, and the evolving role of corporate lawyers.

At the core of all of our discussion and concerns was the need for explainability in AI systems, even when humans are involved in decision-making. The challenge is that many AI technologies currently lack the ability to provide clear explanations for their outputs. This gap raises concerns about transparency and accountability.

Without the ability to explain how AI models arrive at certain decisions, organizations may face hurdles in using these technologies. This, in turn, has significant legal implications, especially in highly regulated sectors like finance.

On top of this, we noted that existing legal tools and processes are not quite caught up with the sorts of questions large enterprise have around copyright, provenance, and licensing concerning AI models. These tools simply haven't been tested thoroughly in this emerging field. No amount of [selfie-taking monkeys](https://en.wikipedia.org/wiki/Monkey_selfie_copyright_dispute) are going to help satisfy these queries until we really get [deep into the subject matter](https://hackernoon.com/doe-vs-github-ammended-complaints-on-copyright-infridgement-open-source-licenses-and-more).

![Portrait of a female Macaca nigra (Celebes crested macaque) in North Sulawesi, Indonesia, who triggered photographer David Slater's camera.](/img/blog/brain_trust_AI_2.png)

Our colleagues in Corporate Law find themselves at a crossroads, unsure whether to adopt a liberal or conservative approach to licensing. An interesting case cited during the discussion was Microsoft's [acceptance of copyright liability for all uses of its Copilot AI](https://blogs.microsoft.com/on-the-issues/2023/09/07/copilot-copyright-commitment-ai-legal-concerns/), a move that leaves corporate lawyers pondering the implications.

As AI technologies become more integrated into industries, there's a growing need for legal frameworks that can adapt to the nuances of AI:

- Current legal structures and copyright laws might not adequately address the complexities of AI model usage. 
- Establishing legal guidelines and frameworks for AI model licensing, copyright, and accountability will be essential. 

It's a dynamic field where the law is racing to catch up with technology. This is going to be the subject of a Brain Trust subcommittee to be planned for the near future (So stay tuned!).

Security & Data Integrity in AI Models

The rapid advancement of artificial intelligence (AI) technologies brings with it a pressing concern: security and data integrity. The Brain Trust had a number of thoughts on the intricacies of ensuring the safety and reliability of AI models in a rapidly evolving landscape.

One of the key points raised during the discussion was the importance of securing AI models. AI models can be vulnerable to various types of attacks, including: 

- Data poisoning
- Adversarial attacks
- Model inversion attacks. 

The security challenge extends beyond protecting AI models from external threats. It also involves implementing robust identity and access management (IAM) systems to ensure that only authorized individuals or systems can interact with these models, especially when considering privileged access on the cloud.

Participants highlighted the need for establishing provenance and a chain of custody for AI models. These mechanisms are crucial for tracking the origin and lineage of AI models, ensuring their integrity throughout their lifecycle. In sectors like finance, where accountability and auditability are paramount, having a clear record of an AI model's history becomes essential, allowing organizations to demonstrate compliance with regulatory requirements.

The discussion underscored the dynamic nature of AI security. As AI technology evolves, so do the threats and vulnerabilities. Organizations must adopt a proactive approach to future-proof their AI security measures. Collaboration among industry experts and researchers can play a crucial role in staying ahead of emerging threats. Regularly updating security protocols and mechanisms is essential to mitigate risks effectively. This will definitely need more discussion and scrutiny in the future!

## AI Taxonomy & Standards

In the fast-evolving landscape of artificial intelligence (AI), establishing clear taxonomies and standards is emerging as a critical enabler for the industry's growth and interoperability. 

One of the fundamental challenges in AI is the lack of a universal language to describe AI components, models, and systems. Taxonomy, in this context, serves as a structured framework that classifies and categorizes AI elements, making it easier for stakeholders to communicate effectively. Creating a shared understanding of AI terminology is vital for collaboration and interoperability, especially in an ecosystem where diverse tools, frameworks, and technologies coexist. 

Participants emphasized the importance of developing standards that allow different AI systems to seamlessly interact with each other. This pursuit of interoperability extends to various domains, including finance, where data sharing and integration are paramount. Standardizing interfaces and data formats fosters an ecosystem where AI models and tools can work together harmoniously. It reduces integration friction, accelerates innovation, and enables organizations to leverage AI more effectively.

This will be the subject of further conversation with the Interoperability SIG and FINOS Labs at a later date.
Taxonomies and standards also play a crucial role in ensuring the ethical and secure use of AI. Establishing guidelines for responsible AI practices is essential in addressing concerns related to bias, fairness, and transparency. In the financial sector, where regulatory compliance is a primary concern, adhering to ethical standards becomes a competitive advantage. It builds trust among customers and regulators while minimizing legal risks. 

Developing comprehensive taxonomies and standards requires input from diverse stakeholders, including researchers, policymakers, and industry experts. This is going to become a key objective of the wider FINOS initiative as we explore many other emerging technologies in the future, so it’s going to be a good initial focus for future Brain Trust meetings.
Looking ahead, the ongoing journey that demands active participation from the wider AI community and a commitment to ethical, secure, and interoperable AI systems will shape the future of AI. With the proper taxonomies and standards, we lay the foundation for innovation, trust, and responsible AI practices. It's a collective effort that promises to drive the industry forward while ensuring that AI benefits everyone.

**[The Zenith Team](mailto:zenith-leadership@lists.finos.org)**
