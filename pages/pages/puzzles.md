# Puzzles 
Mark interesting puzzles I stumble upon from my research and save them here as memos. I will revisit them when I have time.

### Diffusion Models Puzzles

### Equivariance in Euclidean Diffusion Models is Broken

*The discovery of this problem is credited to @ChentongWang.*

Diffusion models that generate 3D data, such as protein structures, do not obey equivariance. For protein backbone generation specifically, the network is equivariant because of the use of pairwise features and Invariant Point Attention (IPA). However, the widely used loss function used is L2 distance, which does not maintain equivariance. 

Let's consider a protein with \(N\) residues, where the structure is represented as \(x \in \mathbb{R}^{N \times 3}\). If we randomly transform (translate and rotate) the structure, resulting in \(T(x)\), and compute the L2 distance between the transformed structure and itself, we find:

$$
L2 = ||T(x) - x|| > 0
$$

This value is non-zero because the coordinates have changed, even though the structures remain the same. If we use an equivariance loss like FAPE, the training may proceed without issue; however, the sampling process will be broken. This is because sampling involves denoising the trajectory in 3D space, which assumes a global coordinate system, while equivariance loss does not rely on global coordinates.

### The Imperfect Approximation Between $\(q(x_t | x_0)\)$ and $x(p_{\theta}(x_t | x_{t-1})\)$

The premise of a diffusion model is to approximate $\(q(x_t | x_0)\)$ using a model, with the goal of achieving 

$$
q(x_t | x_0) = p_{\theta}(x_t | x_{t-1})
$$ 

However, all models are inherently flawed. 

If we recognize that the approximation is inaccurate, what steps can we take? We could consider the following options: 
1. Make the model more robust. 
2. Predict the extent of the inaccuracy (https://arxiv.org/pdf/2405.17880#page=1.22). 
3. Anticipate the deviation and amend the  $\(\hat{x}_t\)$.
