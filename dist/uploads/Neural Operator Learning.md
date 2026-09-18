### An Introduction to Operator Learning

Neural networks, as a deep learning architecture, learns a map between finite-dimensional Euclidean spaces. Examples like CNNs and MLPs convey the same idea. (Refer to my blog on Deep Learning [[Neural Networks in Deep Learning]]).

A neural operator is a generalization of neural networks designed to learn operators, which are mappings between infinite-dimensional function spaces. This raises the natural question,  what exactly is an operator? (Refer to my formal definitions on functions, operators, and vector spaces in [[Definitions in Linear Algebra]].) 

Neural operators are architectures that are discretization-invariant (a feature we will define rigorously later). This allows them to learn the underlying operator that maps an input function space (e.g., the material property) to the solution function space of a PDE. The precise definitions of these input and output function spaces which are not obvious for a PDE setting will be provided in the upcoming section.

In traditional deep learning, to predict the solution of a PDE, one must first discretize the infinite-dimensional function spaces into finite-dimensional vectors. The neural network then learns a mapping from one finite grid to another. This approach inherently ties the input and output of the network to a specific discretization, just like any classical numerical method (eg: FDM, FEM). 

This dependence on a fixed discretization and the resulting approximation errors are precisely what operator learning aims to bypass by learning the solution operator directly as a map between the underlying continuous spaces. 

It has been proven (through the Universal Approximation Theorem for Operators) that architectures like DeepONet and neural operators can approximate any continuous operator to arbitrary accuracy, analogous to the classical Universal Approximation for neural networks. However, note that the standard theorem guarantees existence for a given tolerance, it does not by itself guarantee that a model trained on a coarse grid automatically converges to the continuum operator. That stronger property convergence to the continuum operator as the input discretization is refined, is a distinguishing feature of specific resolution-invariant neural operator architectures, which are explicitly designed to maintain consistency across different grids.

Now, we will discuss the generalization of the problem, formulated for a general PDE and its corresponding function spaces. This requires a small background in functional analysis. 



### Notations Used

- **$\mathbf{x} \in D \subset \mathbb{R}^d$**: A point in the spatial domain. Here, $D$ is an open, bounded set with dimension $d$ (eg: a 2D plate or a 3D volume).

- **$L_a$**: An operator that depends on the parameter function $a(\mathbf{x}) \in \mathcal{A}$, which varies spatially (eg: a material property like thermal conductivity in the case of heat equation). 

- **$\mathcal{A} = L^{\infty}(D; \mathbb{R}^{d_a \times d_a})$**: The Banach space of input functions. These are essentially bounded (not strict rule, should be bounded almost everywhere), real-valued matrix fields (assign a matrix value to all points $\mathbf{x}$). In the simplest scalar case, this reduces to $L^{\infty}(D; \mathbb{R}_+)$, strictly positive, bounded diffusion coefficients.

- **$\mathcal{U} = H_0^1(D; \mathbb{R}^{d_u})$**: The Banach space of solution functions. This is a Sobolev space consisting of functions that, along with their weak derivatives, are square-integrable. The subscript $0$ enforces the boundary condition $u = 0$ on $\partial D$ (homogeneous Dirichlet). In the scalar case, this is simply $H_0^1(D; \mathbb{R})$.

- **$\mathbf{u}(\mathbf{x}) \in \mathcal{U}$**: The solution function we wish to find (e.g., temperature, pressure, or displacement field).


### Properties of Discretization Invariance

**1. Input Query (Arbitrary Discretizations)**
The model takes point-wise evaluations of a function $a$ at a set of $L$ points, $D_L = \{x_\ell\}_{\ell=1}^L \subset D$. The input is $a|_{D_L} \in \mathbb{R}^{Ld}$. The architecture does not depend on the grid size or topology and can be refined or coarsened without changing the parameters.

**2. Output Sampling (Function Space)**
The output is not a finite-dimensional vector. It is an element of the infinite-dimensional function space $\mathcal{U}$. This allows querying the solution $u(x)$ at any arbitrary point $x \in D$, regardless of where the input discretization points were located.

**3. Convergence**
As the input discretization is refined (i.e., $L \to \infty$), the discrete approximation converges uniformly to the true continuous operator. This allows the same architecture to transfer solutions across different grid geometries and resolutions with a single set of trained parameters $\theta$.


### Why $L_a$ is defined in the weak form and maps to $\mathcal{U}^*$

The operator is defined this way: $L_a: \mathcal{U} \to \mathcal{U}^*$ (where $\mathcal{U}^*$ is the dual of $\mathcal{U}$) instead of simply $L_a: \mathcal{U} \to \mathcal{U}$. 

PDEs involve derivatives, and derivatives are *unbounded* operators in standard function spaces. If we tried to evaluate $(L_a u)(\mathbf{x})$ pointwise, we would require $u$ to have strong, classical derivatives which is too restrictive for many real-world materials (where $a$ might be discontinuous). 

To fix this, we use the **weak formulation**. Instead of evaluating $L_a u$ at a single point, we integrate it against a *test function* $v \in \mathcal{U}$ over the domain $D$, (refer to )

$$
\langle L_a u, v \rangle = \int_D a(\mathbf{x}) \nabla u(\mathbf{x}) \cdot \nabla v(\mathbf{x}) \, d\mathbf{x}.
$$

For a fixed $u$, the map $v \mapsto \langle L_a u, v \rangle$ is a linear functional. It takes a test function $v$ and returns a scalar (the integral). This functional lives in the dual space $\mathcal{U}^*$. Dual space in the context of vector space is the collection of all functions which are linear, and maps from the vector to the field of the vector space.

We cannot treat $L_a u$ as a standard function ($\mathcal{U}$) because derivatives don't behave nicely pointwise. We *must* treat it as a functional ($\mathcal{U}^*$) that only makes sense when integrated against test functions. 

Why does $\mathcal{A}$ not have a dual?: Because the parameter $a$ is never differentiated. It simply multiplies the gradients. The differential structure of the PDE acts *only* on the solution $u$. Therefore, $\mathcal{A}$ just needs to be a standard function space ($L^\infty$), and we avoid introducing a dual space for the input.



### General PDE Form

The general PDE is assumed to take the following form in its **strong (pointwise)** sense:

$$
(L_a \mathbf{u})(\mathbf{x}) = f(\mathbf{x}), \quad \mathbf{x} \in D,
$$
$$
\mathbf{u}(\mathbf{x}) = 0, \quad \mathbf{x} \in \partial D.
$$

Here, $f(\mathbf{x})$ is a fixed, known source term (e.g., a heat source or external force) that does *not* depend on the parameter $a$. 

However, as explained above, for the operator $L_a$ to map nicely into the dual space $\mathcal{U}^*$, we actually solve the **weak form** in practice: find $u \in \mathcal{U}$ such that for all test functions $v \in \mathcal{U}$, (refer [[Calculus of Variations - Basics]])

$$
\int_D a(\mathbf{x}) \nabla u(\mathbf{x}) \cdot \nabla v(\mathbf{x}) \, d\mathbf{x} = \int_D f(\mathbf{x}) v(\mathbf{x}) \, d\mathbf{x}.
$$

This weak formulation is the mathematical bridge that allows us to rigorously define $L_a: \mathcal{U} \to \mathcal{U}^*$.



### $L_a$ vs. $\mathcal{G}^\dagger$

If we connect the mathematics of the PDE to the mathematics of neural operators, the learning pipeline can be summarized as follows:

For a data-driven operator map, we need an input-output pair. Hence, this learning is enabled by defining an approximate operator $\mathcal{G}^\dagger: \mathcal{A} \to \mathcal{U}$. 

**This is completely different from the $L_a$ operator defined earlier.** Let us discuss the role of each to avoid confusion:

1. **The Forward Operator ($L_a$)**:
   - So, $L_a$ takes in as input the function $\mathbf{u}(\mathbf{x})$ (the solution) and outputs the forcing function $f(\mathbf{x})$ (or rather, the linear functional representing it).
   - In other words, **$L_a$ answers the question:** *"Given the material property $a$ and the state $u$, what is the source $f$ that produces this state?"*
   - This is called the **forward problem**. It is usually well-posed and straightforward to evaluate numerically.

2. **The Solution Operator ($\mathcal{G}^\dagger$)**:
   - $\mathcal{G}^\dagger$ does the exact opposite. It takes in as input the parameter function $a(\mathbf{x}) \in \mathcal{A}$ and outputs the solution function $\mathbf{u}(\mathbf{x}) \in \mathcal{U}$.
   - In other words, **$\mathcal{G}^\dagger$ answers the question:** *"Given the material property $a$ and the fixed source $f$, what is the resulting state $u$?"*
   - This is the **inverse problem** (specifically, solving the PDE). It is computationally expensive because it requires inverting $L_a$ for every new $a$.


Instead of solving $L_a u = f$ from scratch for each new $a$ using a numerical solver (which is slow), a neural operator directly learns the map $\mathcal{G}^\dagger$. It bypasses the expensive inversion of $L_a$ entirely, giving us the solution $u$ in milliseconds during deployment.




### Empirical Risk Minimization

The ultimate goal is to learn a mapping between two infinite-dimensional function spaces $\mathcal{A}$ and $\mathcal{U}$ using only a finite collection of observed input-output pairs.

$\mathcal{G}^\dagger: \mathcal{A} \to \mathcal{U}$ is the true, unknown (typically non-linear) solution operator we wish to approximate. We are given $N$ training samples $\{a^{(i)}, u^{(i)}\}_{i=1}^N$, where $a^{(i)}$ are drawn independently from a probability measure $\mu$ supported on the input space $\mathcal{A}$, and $u^{(i)} = \mathcal{G}^\dagger(a^{(i)})$ (possibly with some observation noise). To approximate $\mathcal{G}^\dagger$, we construct a parametric map,

$$
\mathcal{G}_\theta : \mathcal{A} \to \mathcal{U}, \quad \theta \in \mathbb{R}^p
$$

where $\theta$ represents the finite set of trainable parameters (eg: the weights and biases of a neural operator). We want to find a specific parameter $\theta^\dagger \in \mathbb{R}^p$ such that the learned operator $\mathcal{G}_{\theta^\dagger}$ closely matches the true operator $\mathcal{G}^\dagger$.


$N$ and $K$ are entirely independent:

- **$N$ (Number of Training Samples):** This is the number of distinct input-output function pairs $\{a^{(i)}, u^{(i)}\}$ in our dataset. Each $a^{(i)}$ is a *complete coefficient function* (e.g., an entire material property field over $D$). $N$ controls how well it performs on unseen inputs.

- **$K$ (Number of Spatial Discretization Points):** This is the number of grid points used to numerically represent each individual function $a^{(i)}(\mathbf{x})$ and $u^{(i)}(\mathbf{x})$ over the spatial domain $D$. For example, if $D = [0,1]^2$ and we use a $64 \times 64$ grid, then $K = 4096$. $K$ controls how accurately we can represent the fine-scale features of each function.

Note: $K$ is used to denote the number of spatial discretization points. In the supremum formulation below, $\mathcal{K} \subset \mathcal{A}$ denotes a class of admissible input functions.


We can define two distinct ways to measure the closeness between the true operator $\mathcal{G}^\dagger$ and the learned operator $\mathcal{G}_\theta$.



### Average Error: Empirical Risk Minimization

The first metric measures the **average performance** over all possible inputs $a$, weighted by the probability measure $\mu$. This is formalized using the $L^2_\mu$ Bochner norm: refer [[Definitions in Linear Algebra]],

$$
\|\mathcal{G}^\dagger - \mathcal{G}_\theta\|_{L^2_\mu(\mathcal{A}; \mathcal{U})}^2 = \mathbb{E}_{a \sim \mu}\|\mathcal{G}^\dagger(a) - \mathcal{G}_\theta(a)\|_{\mathcal{U}}^2 = \int_{\mathcal{A}} \|\mathcal{G}^\dagger(a) - \mathcal{G}_\theta(a)\|_{\mathcal{U}}^2 \, d\mu(a).
$$

This metric tells us how well the operator performs "on average" over the distribution of real-world inputs we are likely to encounter. Because we cannot compute the true expectation (since we do not know $\mu$), we approximate it with the empirical average over our finite training set, leading to the classic Empirical Risk Minimization (ERM) formulation:

$$
\min_{\theta \in \mathbb{R}^p} \mathbb{E}_{a \sim \mu}\|\mathcal{G}^\dagger(a) - \mathcal{G}_\theta(a)\|_{\mathcal{U}}^2 \approx \min_{\theta \in \mathbb{R}^p} \frac{1}{N} \sum_{i=1}^N \|u^{(i)} - \mathcal{G}_\theta(a^{(i)})\|_{\mathcal{U}}^2.
$$

This directly parallels how we train standard neural networks by minimizing the average loss over the training dataset. It is the natural framework for data-driven learning because it aligns with the finite-sample statistics we have in hand.



### Worst-Case Error: Supremum

The second metric measures the **maximum possible error** over a compact (closed and bounded) subset $\mathcal{K} \subset \mathcal{A}$:

$$
\sup_{a \in \mathcal{K}} \|\mathcal{G}^\dagger(a) - \mathcal{G}_\theta(a)\|_{\mathcal{U}}.
$$

**Why do we need a supremum? Why is it taken across $a$?**

We take the supremum over all functions $a$ in the compact set $\mathcal{K}$ to measure the worst-case performance of our learned operator. Instead of asking, "How good is the operator on average?", we ask, "What is the absolute worst error this operator could possibly make for any input within this physically relevant class?"

**What do we do with this supremum?**

The supremum is a theoretical tool used primarily for mathematical guarantees. In classical approximation theory, showing that 

$$
\sup_{a \in \mathcal{K}} \|\mathcal{G}^\dagger(a) - \mathcal{G}_\theta(a)\|_{\mathcal{U}} \to 0 \quad \text{as the number of parameters } p \to \infty
$$ 

proves that the architecture is a *universal approximator* for operators. It ensures that the architecture possesses the *capacity* to approximate the true map arbitrarily well, regardless of the input distribution.

The objective of invoking this supremum is to establish reliability. In scientific computing and engineering, we often cannot rely on probabilistic guarantees alone. A model that performs excellently on average might still fail catastrophically on rare but physically critical inputs (eg: extreme material properties). The supremum guarantee tells us that the model works uniformly well across an entire class of continuous inputs, aligning with classical numerical analysis, where we traditionally bound the maximum error over all possible solutions (eg: the trapezoidal rule in numerical integration, or a priori error estimates in the finite element method).

### Formalizing Domain Discretization

**Discrete Refinement & Discretization**  
A sequence of nested sets $D_1 \subset D_2 \subset \dots \subset D$ such that for any $\epsilon > 0$, there exists an $L$ where  
$$
D \subseteq \bigcup_{x \in D_L} \{y : \|y - x\|_2 < \epsilon\}.
$$  
Any member $D_L$ is called a discretization of $D$.

**Discretized Uniform Risk**  
The quantity $R_{\mathcal{K}}$ measures the **worst-case error** between the true continuous operator and its discrete approximation, evaluated over a compact set of input functions $\mathcal{K} \subset \mathcal{A}$. Formally,  
$$
R_{\mathcal{K}}(\mathcal{G}, \hat{\mathcal{G}}, D_L) = \sup_{a \in \mathcal{K}} \|\hat{\mathcal{G}}(D_L, a|_{D_L}) - \mathcal{G}(a)\|_{\mathcal{U}},
$$  
where:  
- $\mathcal{G}: \mathcal{A} \to \mathcal{U}$ is the true continuous operator.  
- $\hat{\mathcal{G}}: \mathbb{R}^{Ld} \times \mathbb{R}^{Lm} \to \mathcal{U}$ is the discrete approximation map. It takes the discretized input (point-wise evaluations on $D_L$) and outputs a continuous function in $\mathcal{U}$.  
- $a|_{D_L}$ denotes the point-wise evaluations of the input function $a$ at the $L$ points of $D_L$.  
- The supremum is taken over all functions $a$ in the compact set $\mathcal{K}$, ensuring a uniform guarantee across that entire class of inputs.  

**Discretization Invariance**  
Given a finite-dimensional parameter space $\Theta \subseteq \mathbb{R}^p$ and a parametric operator $\mathcal{G}: \mathcal{A} \times \Theta \to \mathcal{U}$, the architecture is **discretization-invariant** if there exists a sequence of discrete maps  
$$
\hat{\mathcal{G}}_L : \mathbb{R}^{Ld} \times \mathbb{R}^{Lm} \times \Theta \to \mathcal{U}
$$  
such that for any fixed parameters $\theta \in \Theta$ and any compact set $\mathcal{K} \subset \mathcal{A}$,  
$$
\lim_{L \to \infty} R_{\mathcal{K}}(\mathcal{G}(\cdot, \theta), \hat{\mathcal{G}}_L(\cdot, \cdot, \theta), D_L) = 0.
$$  
In other words, as the discretization is refined ($L \to \infty$), the discrete approximation converges uniformly to the true continuous operator over the compact set $\mathcal{K}$.

*Go to the [[Neural Operator Architecture]] blog next, to learn more about how they achieve this incredible speed-up and discretization invariance in practice.*